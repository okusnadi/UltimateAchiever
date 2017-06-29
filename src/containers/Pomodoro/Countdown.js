// @flow

import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {MyButton} from '../../components'
import {observer, inject} from "mobx-react"

@inject("pomoStore")
@observer
class Countdown extends Component {
	constructor(props) {
		super(props)
		this.state = {time: this.props.time, done: true}
	}

	render() {
		if (this.props.pomoStore.pomoStatus == 'stopped') {
			this.startBtn = <MyButton onPress={() => this.props.pomoStore.startCount()}>
				New Session
			</MyButton>
		} else {
			this.startBtn = null
		}
		return (
			<View>
				<Text>{this.state.time}</Text>
				<Text>{this.displayTime(this.props.pomoStore.timeLeft)}</Text>
				{this.startBtn}
				<Text>
					timeSession: {this.props.pomoStore.timeSession}
				</Text>
				<Text>
					timeLeft: {this.displayTime(this.props.pomoStore.timeLeft)}
				</Text>
				<Text>
					pomoStatus: {this.props.pomoStore.pomoStatus}
				</Text>
			</View>
		)
	}


	displayTime(secs) {
		// let h = Math.floor(secs / 3600)
		let m = Math.floor(secs / 60)
		let s = Math.floor(secs % 3600 % 60)

		let mDisplay = m > 9 ? m + ':' : '0' + m + ':'
		let sDisplay = s > 9 ? s : '0' + s
		return mDisplay + sDisplay
	}
}

Countdown.propTypes = {
	time: React.PropTypes.number
}

export default Countdown