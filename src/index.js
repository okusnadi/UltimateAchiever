/**
 * @flow
 */
import React, { Component } from 'react'
import Navigator from './navigation/Navigator'
import { Provider } from 'mobx-react'
import stores from './stores'

export default class UltimateAchiever extends Component {
	render() {
		return (
			<Provider {...stores}>
				<Navigator />
			</Provider>
		)
	}
}
