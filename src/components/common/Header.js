import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.container}>{this.props.headerText}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 4},
		shadowOpacity: 0.2,
		elevation: 4,
		position: 'relative'
	},
	container: {
		fontSize: 20
	},
})

export { Header }