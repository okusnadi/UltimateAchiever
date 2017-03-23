import React, {Component} from 'react'
import {
	AppRegistry,
	StyleSheet, Text,
	View
} from 'react-native'



import Countdown from './Countdown'
import Header from '../common/Header'


export default class Pomodoro extends Component {
	// let timeSession = 5

	render() {
		return (
			<View >
				<Header headerText={'Pomodoro'}/>
				<Countdown time={10}/>
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
