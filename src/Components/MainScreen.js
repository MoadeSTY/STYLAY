import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import "./styles.css";
//import { StackNavigator } from "@react-navigation/stack"

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
