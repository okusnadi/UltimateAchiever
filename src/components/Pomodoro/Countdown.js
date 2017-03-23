import React, { Component } from 'react'
import {Text, View} from 'react-native'
import MyButton from '../common/MyButton'

class Countdown extends Component {
	// private interval: any
	constructor(props) {
		super(props)
		this.state = {time: this.props.time, done: true}

	}
	render() {
		if (this.state.done) {
			this.startBtn = <MyButton onPress={this.startCount.bind(this)}>
				New Session
			</MyButton>
		} else {
			this.startBtn = null
		}
		return (
			<View>
				<Text>{this.state.time}</Text>
				<Text>{this.displayTime(this.state.time)}</Text>
				<Text>{this.state.done}</Text>
				{this.startBtn}

			</View>

        )
    }
    startCount() {
		this.setState({ time: this.props.time, done: false})

		this.interval = setInterval(() => {
			this.count(this.state.time)
		}, 1000);

	}

    count(secs) {
		if (secs>0) {
			this.setState({ time: secs - 1 })
		} else {
			clearInterval(this.interval)
			this.setState({ done: true })
		}
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

Countdown.propTypes ={
	time: React.PropTypes.number
}

export default Countdown