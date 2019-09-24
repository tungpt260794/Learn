import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontWeight: "500",
    fontSize: 20
  }
});

class Blink extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText
      }));
    }, 1000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={[{ textAlign: "center" }, styles.text]}>
        {this.props.text}
      </Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}
