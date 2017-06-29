// @flow

import {observable, action, computed} from 'mobx'

export default class PomoStore {
	@observable timeSession = 10
	@observable timeLeft = 0
	@observable pomoStatus = 'stopped'
	// started, paused, stopped, done
	// let interval = 0

	@action	startCount() {
		this.pomoStatus = 'started'
		this.timeLeft = this.timeSession

		this.interval = setInterval(() => {
			this.count(this.timeLeft)
		}, 1000)

	}

	@action count(secs) {
		if (secs > 0) {
			this.timeLeft--
		} else {
			clearInterval(this.interval)
			this.pomoStatus = 'stopped'
		}
	}

	@observable firstName = 'Sen'
	@observable lastName = 'Appleseed'
	@observable email = 'send@appleseed.com'
	@observable phone = '1155667788'

	@action	data(data: Object) {
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

	@computed get fullName(): string {
		return `${this.firstName} ${this.lastName}`
	}

	// An interesting function is the fullName function. It is basically computed out of firstName and lastName observable fields.
	// MobX strongly encourages to keep the state information as minimal as possible and derive other state information
	// with @computed get decorators that are pure functions of other observable fields.
	// <Text>FullName: {this.props.pomoStore.fullName}</Text>
}

// export default new Store();
