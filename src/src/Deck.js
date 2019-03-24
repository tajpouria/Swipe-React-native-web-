import React, { Component } from "react";
import { View, PanResponder, Animated } from "react-native";

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
    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate: "-45deg" }]
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
