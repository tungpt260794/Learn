import React, { Component } from "react";

import { Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default class ButtonBasics extends Component {
  _onPressButton(text) {
    alert(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton(this.props.text)}
            title="Press me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton(this.props.text)}
            title="Press me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => this._onPressButton(this.props.text)}
            title="This looks great!"
          />
          <Button
            onPress={() => this._onPressButton(this.props.text)}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}
