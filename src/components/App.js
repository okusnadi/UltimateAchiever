import React, {Component} from 'react'
import {
	AppRegistry, Button,
	Text, View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome to UltimateAchiever',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>Hello, Chat App!</Text>
				<Button
					onPress={() => navigate('Chat', { user: 'John' })}
					title="Chat with Lucy"
				/>
			</View>
		);
	}
}
class ChatScreen extends React.Component {
	static navigationOptions = {
		// Nav options can be defined as a function of the navigation prop:
		title: ({ state }) => `Chat with ${state.params.user}`,
	};
	render() {
		// The screen's current route is passed in to `props.navigation.state`:
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Chat with {params.user}</Text>
			</View>
		);
	}
}

const UltimateAchiever = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('UltimateAchiever', () => UltimateAchiever);