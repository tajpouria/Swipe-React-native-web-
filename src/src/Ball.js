import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";

export default class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, { toValue: { x: 200, y: 500 } }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.container} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: 80,
    width: 80,
    borderRadius: 60
  }
});
