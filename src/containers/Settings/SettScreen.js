import React, { Component } from 'react'
import { Button, Text, View, AppState } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject('pomoStore')
@observer
export default class SettScreen extends Component {
	static navigationOptions = {
		title: 'Settings'
		// Nav options can be defined as a function of the navigation prop:
		// title: ({ state }) => `Chat with ${state.params.user}`,
	}

	render() {
		console.log('Render SettScreen')
		const { navigate } = this.props.navigation
		// The screen's current route is passed in to `props.navigation.state`:
		const { params } = this.props.navigation.state
		return (
			<View>
			</View>
		)
	}
}
