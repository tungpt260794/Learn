import React, { Component } from "react";

import { Text, TextInput, View } from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10
          }}
          placeholder="Type here to translate!"
          onChangeText={this.props.onChangeText}
          value={this.props.text}
        />
        <Text style={{ padding: 10, fontSize: 42, textAlign: "center" }}>
          {this.props.text.split(" ").map(word => word && "🍕")}
        </Text>
      </View>
    );
  }
}
