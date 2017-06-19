// @flow
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate("Pomo", { user: "Lucy" })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
