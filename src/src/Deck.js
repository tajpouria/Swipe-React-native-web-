import React, { Component } from "react";
import { View, PanResponder, Animated, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

export default class Deck extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          console.log("Swipe Right");
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          console.log("Swipe Left");
        } else {
          this.resetPosition();
        }
        this.resetPosition();
      }
    });
    this.state = { panResponder, position };
  }
  resetPosition() {
    return Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }
  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
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
