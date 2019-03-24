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
  renderCards() {
    return this.props.data.map(item => {
      return this.props.render(item);
    });
  }
  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}
