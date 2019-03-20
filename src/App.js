import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "./App.css";

class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
