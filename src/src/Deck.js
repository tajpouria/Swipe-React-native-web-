import React, { Component } from "react";
import { View, PanResponder } from "react-native";

export default class Deck extends Component {
  constructor(props) {
    super(props);
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState);
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder };
  }
  renderCards() {
    return this.props.data.map(item => {
      return this.props.render(item);
    });
  }
  render() {
    return (
      <View {...this.state.panResponder.panHandlers} style={{ flex: 1 }}>
        {this.renderCards()}
      </View>
    );
  }
}
