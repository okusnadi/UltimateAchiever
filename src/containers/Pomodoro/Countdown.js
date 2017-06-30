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
				<MyButton onPress={() => props.pomoStore.changeStatus('start')}>
					{strings.new_session}
				</MyButton>
			)
		} else {
			startBtn = null
		}

		if (props.pomoStore.pomoStatus == 'started') {
			pauseBtn = (
				<MyButton onPress={() => props.pomoStore.changeStatus('pause')}>
					{strings.pause_session}
				</MyButton>
			)
		} else {
			pauseBtn = null
		}
		if (props.pomoStore.pomoStatus == 'paused') {
			resumeBtn = (
				<MyButton onPress={() => props.pomoStore.changeStatus('start')}>
					{strings.resume_session}
				</MyButton>
			)
		} else {
			resumeBtn = null
		}
		if (props.pomoStore.pomoStatus == 'paused' || props.pomoStore.pomoStatus == 'started') {
			abortBtn = (
				<MyButton onPress={() => props.pomoStore.changeStatus('abort')}>
					{strings.abort_session}
				</MyButton>
			)
		} else {
			abortBtn = null
		}
		if (props.pomoStore.pomoStatus == 'breaked') {
			breakBtn = (
				<MyButton onPress={() => props.pomoStore.changeStatus('break')}>
					{strings.start_break}
				</MyButton>
			)
		} else {
			breakBtn = null
		}
		if (props.pomoStore.pomoStatus == 'completed') {
			skipBtn = (
				<MyButton onPress={() => props.pomoStore.changeStatus('abort')}>
					{strings.skip_break}
				</MyButton>
			)
		} else {
			skipBtn = null
		}


		const displayTime = secs => {
			// let h = Math.floor(secs / 3600)
			let m = Math.floor(secs / 60)
			let s = Math.floor(secs % 3600 % 60)
			let mDisplay = m > 9 ? m + ':' : '0' + m + ':'
			let sDisplay = s > 9 ? s : '0' + s
			return mDisplay + sDisplay
		}
		//todo hide counts depending
		return (
			<View>
				<Text>
					timeSession: {props.pomoStore.timeSession}
				</Text>
				<Text>
					timeLeft: {displayTime(props.pomoStore.timeSessionLeft)}
				</Text>
				<Text>
					timePauseLeft: {displayTime(props.pomoStore.timePauseLeft)}
				</Text>
				<Text>
					timeBreakLeft: {displayTime(props.pomoStore.timeBreakLeft)}
				</Text>
				<Text>
					pomoStatus: {props.pomoStore.pomoStatus}
				</Text>
				<Text>
					sessionCount: {props.pomoStore.sessionCount}
				</Text>
				{startBtn}
				{pauseBtn}
				{resumeBtn}
				{abortBtn}
				{breakBtn}
				{skipBtn}
			</View>
		)
	})
)
export default Countdown
