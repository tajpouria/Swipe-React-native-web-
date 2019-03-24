import React, { Component } from "react";
import { View, PanResponder, Animated, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Deck extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: () => {}
    });
    this.state = { panResponder, position };
  }
  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ["-120deg", "0deg", "120deg"]
    });
    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate }]
    };
  }
  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.render(item)}
          </Animated.View>
        );
      }
      return this.props.render(item);
    });
  }
  render() {
    return <View>{this.renderCards()}</View>;
  }
}
