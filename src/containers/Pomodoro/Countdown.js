// @flow

import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {MyButton} from '../../components'
import {observer, inject} from 'mobx-react'
import {strings} from '../../config/strings'

const Countdown = inject('pomoStore')(
	observer(props => {
		if (props.pomoStore.pomoStatus == 'stopped') {
			startBtn = (
				<MyButton onPress={() => props.pomoStore.startCount()}>
					{strings.new_session}
				</MyButton>
			)
		} else {
			startBtn = null
		}

		const displayTime = secs => {
			// let h = Math.floor(secs / 3600)
			let m = Math.floor(secs / 60)
			let s = Math.floor(secs % 3600 % 60)
			let mDisplay = m > 9 ? m + ':' : '0' + m + ':'
			let sDisplay = s > 9 ? s : '0' + s
			return mDisplay + sDisplay
		}

		return (
			<View>
				<Text>
					timeSession: {props.pomoStore.timeSession}
				</Text>
				<Text>
					timeLeft: {displayTime(props.pomoStore.timeLeft)}
				</Text>
				<Text>
					pomoStatus: {props.pomoStore.pomoStatus}
				</Text>
				{startBtn}
			</View>
		)
	})
)
export default Countdown
