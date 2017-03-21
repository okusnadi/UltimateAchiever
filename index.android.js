import React, {Component} from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native'


import { Header } from './src/components/common'
import Pomodoro from './src/components/Pomodoro/Pomodoro'


export default class UltimateAchiever extends Component {
	render() {
		return (
			<View >
				<Pomodoro/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
})

AppRegistry.registerComponent('UltimateAchiever', () => UltimateAchiever)
