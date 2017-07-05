// @flow
import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { observer, inject } from 'mobx-react'
import { Header } from '../../components'
import Countdown from './Countdown'

@inject('pomoStore')
@observer
export default class PomoScreen extends Component {
	static navigationOptions = {
		title: 'Sup'
		// Nav options can be defined as a function of the navigation prop:
		// title: ({ state }) => `Chat with ${state.params.user}`,
	}

	render() {
		console.log('Render PomoScreen')
		const { navigate } = this.props.navigation

		// The screen's current route is passed in to `props.navigation.state`:
		const { params } = this.props.navigation.state
		return (
			<View>
				{/*<Header headerText={'Pomodoro'}/>*/}
				<Countdown/>
				<Text>
					{/*Chat with {params.user}*/}
				</Text>
			</View>
		)
	}
}
