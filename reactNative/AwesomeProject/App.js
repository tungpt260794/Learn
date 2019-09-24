import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import HelloWorlApp from "./HelloWorldApp";
import Bananas from "./Bananas";
import LotsOfGreeting from "./LotsOfGreeting";
import BlinkApp from "./BlinkApp";
import PizzaTranslator from "./PizzaTranslator";
import ButtonBasics from "./ButtonBasics";

export default function App() {
  const [state, setState] = useState({ text: "" });

  return (
    <View style={styles.container}>
      <BlinkApp />
      <LotsOfGreeting />
      <PizzaTranslator
        onChangeText={text => setState({ text })}
        text={state.text}
      />
      <ButtonBasics text={state.text} />
      <HelloWorlApp />
      <Bananas />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
