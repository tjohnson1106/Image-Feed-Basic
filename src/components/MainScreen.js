import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { TabNavigator } from "react-navigation";

import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import HomeTab from "./AppTabNavigator/HomeTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon style={{ paddingLeft: 10 }} name="ios-search-outline" />,
    title: "Image Feed",
    headerRight: <Icon style={{ paddingRight: 10 }} name="ios-people-outline" />
  };
  render() {
    return <AppTabNavigator />;
  }
}

export default MainScreen;

const AppTabNavigator = {
  HomeTab: {
    screen: HomeTab
  },

  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
};
