// @flow
import React, {Component} from 'react'
import {Button, Text, View, AppState, AsyncStorage} from 'react-native'
import {observer, inject} from 'mobx-react'
import {Header} from '../../components'
import Countdown from './Countdown'


@inject('pomoStore')
@observer
export default class PomoScreen extends Component {
	//navigate = this.props.navigation

	static navigationOptions = ({ navigation }) => ({
		title: 'Sup',
		headerTintColor: 'blue',
		headerRight: (
			<Button
				title="Settings"
				onPress={() => navigation.navigate('Sett', {user: 'Lucy'})}
			/>
		)
		// Nav options can be defined as a function of the navigation prop:
		// title: ({ state }) => `Chat with ${state.params.user}`,

		//title: `Chat with ${navigation.state.params.user}`,

		// title: navigation.state.params.name + "'s Profile!",
	})

	state = {
		appState: AppState.currentState
	}
	componentDidMount() {
		AppState.addEventListener('change', this._handleAppStateChange)
	}
	componentWillUnmount() {
		AppState.removeEventListener('change', this._handleAppStateChange)
	}
	_handleAppStateChange = nextAppState => {
		if (
			this.state.appState.match(/inactive|background/) &&
			nextAppState === 'active'
		) {
			console.log('App has come to the foreground!')
		}
		this.setState({appState: nextAppState})
	}

	render() {
		console.log('Render PomoScreen')
		const {navigate} = this.props.navigation
		// The screen's current route is passed in to `props.navigation.state`:
		const {params} = this.props.navigation.state
		return (
			<View>
				{/*<Header headerText={'Pomodoro'}/>*/}
				<Countdown />
				<Text>
					{/*Chat with {params.user}*/}
				</Text>
			</View>
		)
	}
}
