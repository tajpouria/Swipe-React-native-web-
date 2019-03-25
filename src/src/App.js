import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
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
      <Card title="Deck Cards" image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>{item.text}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="VIEW NOW"
        />
      </Card>
    );
  }

  renderNoMoreCard() {
    return (
      <Card title="All DONE !">
        <Text>There is no more content to show!</Text>
        <Button title="Reload more!" />
      </Card>
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
