import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SearchTab extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>SearchTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SearchTab;
