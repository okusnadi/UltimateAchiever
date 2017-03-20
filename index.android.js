import React, {Component} from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native'


import { Header } from './src/components/common'


export default class UltimateAchiever extends Component {
	render() {
		return (
			<View >
				<Header headerText={'SupeerTrooper'}/>
				<Text >
					Welcome to React Native!
				</Text>

				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Double tap R on your keyboard to reload,{'\n'}
					Shake or press menu button for dev menu Test Test teststets sdgsf
				</Text>
				<Text style={styles.container}>ff</Text>

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
