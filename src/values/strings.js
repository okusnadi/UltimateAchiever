// import { strings } from './config/strings';
// <Text>{strings.hello_world}</Text>

// @flow

import LocalizedStrings from 'react-native-localization'

export let strings = new LocalizedStrings({
	en: {
		//pomoScreen
		new_session: 'New Session',
		pause_session: 'Pause',
		abort_session: 'Abort',
		resume_session: 'Resume',
		start_break: 'Start break',
		skip_break: 'Skip break',
	},
	uk: {
		hello_world: 'Привіт, Світ'
	}
})
