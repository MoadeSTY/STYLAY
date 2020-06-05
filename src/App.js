import React from "react";
import { StyleSheet } from "react-native";
import AppStackNavigator from "./Navigation/Navigation";

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
