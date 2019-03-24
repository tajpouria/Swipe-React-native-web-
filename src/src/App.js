import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Deck from "./Deck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

export default class App extends Component {
  renderCard(item) {
    return (
      <View
        key={item => {
          return item.id;
        }}
        style={styles.card}
      >
        <View style={styles.cardContainer}>
          <Image style={styles.cardImage} source={{ uri: item.uri }} />
        </View>
        <View>
          <Text>{item.text}</Text>
          <Text>I can customize the Card further.</Text>
          <Button title="< > View Now!" />
        </View>
      </View>
    );
  }

  renderNoMoreCard() {
    return (
      <View style={styles.card}>
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button title="Get more!" />
      </View>
    );
  }
  render() {
    return (
      <Deck
        data={DATA}
        render={this.renderCard}
        renderNoMoreCard={this.renderNoMoreCard()}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderColor: "grey",
    borderWidth: 2,
    margin: 2
  },
  cardImage: {
    height: 200,
    width: 365
  },
  cardContainer: {
    flex: 1,
    marginBottom: 10
  }
});
