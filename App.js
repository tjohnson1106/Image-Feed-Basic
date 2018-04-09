import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { StackNavigator } from "react-navigation";

import MainScreen from "./src/components/MainScreen";

class App extends Component {
  state = {};
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});

export default App;
