import React, { Component } from "react";
import { View } from "react-native";

export default class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return this.props.render(item);
    });
  }
  render() {
    return <View style={{ flex: 1 }}>{this.renderCards()}</View>;
  }
}
