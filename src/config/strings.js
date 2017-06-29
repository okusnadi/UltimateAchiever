// import { strings } from './config/strings';
// <Text>{strings.hello_world}</Text>

// @flow

import LocalizedStrings from 'react-native-localization';

export let strings = new LocalizedStrings({
	en:{
		new_session: "New Session"
	},
	uk: {
		hello_world:"Привіт, Світ",
	}
});

