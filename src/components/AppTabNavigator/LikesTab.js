import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LikesTab extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>LikesTab</Text>
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

export default LikesTab;
