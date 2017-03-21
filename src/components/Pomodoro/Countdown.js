import React, { Component } from 'react'
import {Text} from 'react-native'

class Countdown extends Component {
	constructor(props) {
		super(props)
		this.state = {time: this.props.time, b: 5}

		setInterval(() => {
			this.setState({ time: this.state.time-1 })
		}, 1000);
	}
	render() {
		return (
			<Text>{this.state.time}</Text>
        )
    }
}

Countdown.propTypes ={
	time: React.PropTypes.number
}

export default Countdown