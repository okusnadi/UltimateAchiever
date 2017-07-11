import {observable, action, computed} from 'mobx'
import BackgroundTimer from 'react-native-background-timer'
import {AsyncStorage} from 'react-native'
import {persist} from 'mobx-persist'
import store from 'react-native-simple-store'

export default class PomoStore {
	constructor() {
		this.getTimeSession()
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

	@action setTimePause(time) {
		store.update('pause', time)
		console.log('BananaPause: ' + time)
		this.timePause = store.get('pause').then((res) => {
				console.log('BananaPause: ' + res)
				return res
		}
		)
		console.log('BananaPauseFin: ' + this.timePause)
	}
	@action
	async setTimeSession(time) {
		AsyncStorage.setItem('@pomoStore:timeSession', time)
		this.getTimeSession()
	}

	async getTimeSession() {
		await AsyncStorage.getItem(
			'@pomoStore:timeSession'
		).then(value => {
				this.timeSession = value
		})
	}
	@action
	setTimeBreak(time) {
		this.timeBreak = time
	}

	@observable firstName = 'Sen'
	@observable lastName = 'Appleseed'
	@observable email = 'send@appleseed.com'
	@observable phone = '1155667788'

	@action
	data(data: Object) {
		if (data.firstName) {
			this.firstName = data.firstName
		}
		if (data.lastName) {
			this.lastName = data.lastName
		}
		if (data.email) {
			this.email = data.email
		}
		if (data.phone) {
			this.phone = data.phone
		}
	}

	@computed
	get fullName(): string {
		return `${this.firstName} ${this.lastName}`
	}

	// An interesting function is the fullName function. It is basically computed out of firstName and lastName observable fields.
	// MobX strongly encourages to keep the state information as minimal as possible and derive other state information
	// with @computed get decorators that are pure functions of other observable fields.
	// <Text>FullName: {this.props.pomoStore.fullName}</Text>
}

// export default new Store();
