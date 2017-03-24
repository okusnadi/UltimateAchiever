import React, {Component} from 'react'
import {
	AppRegistry,
	StyleSheet, Text,
	View
} from 'react-native'



import Countdown from './Countdown'
import Header from '../common/Header'


export default class PomoScreen extends Component {
	static navigationOptions = {
		// Nav options can be defined as a function of the navigation prop:
		title: ({ state }) => `Chat with ${state.params.user}`,
	}
	render() {
		// The screen's current route is passed in to `props.navigation.state`:
		const { params } = this.props.navigation.state
		return (
			<View >
				<Header headerText={'Pomodoro'}/>
				<Countdown time={10}/>
				<Text>Chat with {params.user}</Text>
			</View>
		)
	}

}
//
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF',
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// })
