// @flow

import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {observer, inject} from "mobx-react";

@inject("scheStore")
@observer
class ScheScreen extends Component {
	static navigationOptions = {
		title: "Sup"
		// Nav options can be defined as a function of the navigation prop:
		// title: ({ state }) => `Chat with ${state.params.user}`,
	};

	render() {
		const {navigate} = this.props.navigation
		// The screen's current route is passed in to `props.navigation.state`:
		const {params} = this.props.navigation.state;
		return (
			<View>
				<Text>Chat with </Text>
			</View>

		)
	}
}

export default ScheScreen