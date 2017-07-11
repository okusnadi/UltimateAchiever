import {observable, action, computed} from 'mobx'
import BackgroundTimer from 'react-native-background-timer'
import {AsyncStorage} from 'react-native'

export default class PomoStore {
	constructor() {
		this.getTimeSession('timeSession')
		this.getTimeSession('timePause')
		this.getTimeSession('timeBreak')
	}

	//todo test initial values
	@observable timeSession
	@observable timeSessionLeft = this.timeSession
	@observable pomoStatus = 'stopped'
	// started, paused, stopped, done
	@observable pauseAllowed = true
	@observable	timePause
	@observable timePauseLeft = this.timePause
	@observable	timeBreak
	@observable timeBreakLeft = this.timeBreak
	@observable timeLBreak = 10
	@observable	sessionCount = 0
	@observable clickedType = 'none'
	//todo maybe convert some observables to computed?
	@action
	changeStatus(command) {
		switch (command) {
			case 'start':
				BackgroundTimer.clearInterval(this.interval)
				this.timeSessionLeft = this.timeSession
				this.timePauseLeft = this.timePause
				this.timeBreakLeft = this.timeBreak
				this.pomoStatus = 'started'
				this.interval = BackgroundTimer.setInterval(() => {
					this.count(this.timeSessionLeft)
				}, 1000)
				console.log('changeStatus start')
				break
			case 'break':
				BackgroundTimer.clearInterval(this.interval)
				this.pomoStatus = 'breaked'
				this.interval = BackgroundTimer.setInterval(() => {
					this.count(this.timeBreakLeft)
				}, 1000)
				console.log('changeStatus break')
				break
			case 'void':
				this.sessionCount--
				break
			case 'pause':
				BackgroundTimer.clearInterval(this.interval)
				this.pomoStatus = 'paused'
				this.interval = BackgroundTimer.setInterval(() => {
					this.count(this.timePauseLeft)
				}, 1000)
				console.log('changeStatus pause')
				break
			case 'abort':
				BackgroundTimer.clearInterval(this.interval)
				this.timeSessionLeft = this.timeSession
				this.pomoStatus = 'stopped'
				this.clickedType = 'none'
				console.log('changeStatus abort')
				break
		}
	}

	count(secs) {
		if (secs > 1) {
			if (this.pomoStatus == 'paused') {
				this.timePauseLeft--
			} else if (this.pomoStatus == 'breaked') {
				this.timeBreakLeft--
			} else {
				this.timeSessionLeft--
			}
		} else {
			if (this.pomoStatus == 'paused') {
				this.timePauseLeft--
				this.pomoStatus = 'stopped'
				this.timePauseLeft = this.timePause
				this.timeSessionLeft = this.timeSession
			} else if (this.pomoStatus == 'breaked') {
				this.timeBreakLeft--
				this.pomoStatus = 'stopped'
				this.timeBreakLeft = this.timeBreak
			} else {
				this.timeSessionLeft--
				this.sessionCount++
				this.pomoStatus = 'completed'
				this.timeSessionLeft = this.timeSession
			}
			BackgroundTimer.clearInterval(this.interval)

			//todo long break if count is something divided by number
			// of sessions streak! Which can be nullified after period of time
		}
	}

	@action	async setTimeSession(type, time) {
		AsyncStorage.setItem('@pomoStore:'+type, time)
		this.getTimeSession(type)
	}
	@action async getTimeSession(type) {
		await AsyncStorage.getItem(
			'@pomoStore:'+type
		).then(value => {
			this[type] = value
		})
	}

//todo delete this
	@computed
	get fullName(): string {
		return `${this.firstName} ${this.lastName}`
	}

	// An interesting function is the fullName function. It is basically computed out of firstName and lastName observable fields.
	// MobX strongly encourages to keep the state information as minimal as possible and derive other state information
	// with @computed get decorators that are pure functions of other observable fields.
	// <Text>FullName: {this.props.pomoStore.fullName}</Text>
}
