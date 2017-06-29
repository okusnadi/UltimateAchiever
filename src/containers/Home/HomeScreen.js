// @flow
import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'
import {observer, inject} from 'mobx-react'

@inject('pomoStore')
@observer
export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome to UltimateAchiever'
	}

	render() {
		const {navigate} = this.props.navigation
		return (
			<View>
				<Text>Hello, Chat App!</Text>
				<Button
					onPress={() => navigate('Pomo', {user: 'Lucy'})}
					title="Chat with Lucy"
				/>
				<Button onPress={() => this.props.pomoStore.increment()} title="incr" />
				<Text>
					Count: {this.props.pomoStore.count}
				</Text>
			</View>
		)
	}
}
