import React, { Component } from 'react'
import {Text, View} from 'react-native'

class Countdown extends Component {
	// private interval: any
	constructor(props) {
		super(props)
		this.state = {time: this.props.time, done: ''}





		this.interval = setInterval(() => {
			this.startCount(this.state.time)
		}, 1000);
	}
	render() {
		return (
			<View>
				<Text>{this.state.time}</Text>
				<Text>{this.displayTime(this.state.time)}</Text>
				<Text>{this.state.done}</Text>
			</View>

        )
    }

    startCount(secs) {
		if (secs>1) {
			this.setState({ time: secs - 1 })
		} else {
			clearInterval(this.interval)
			this.setState({ done: 'Done!' })
		}
	}
// todo stop timer
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