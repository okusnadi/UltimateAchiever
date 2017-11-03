// Have colors like: Main.FirstTheme Main.SecondTheme

// Useful things to keep in mind for coding your styles:
// 	Device resolution: let { height, width } = Dimensions.get(“window”);
// Orientation changes
// Darken, lighten color (ie: https://www.npmjs.com/package/color)
// 	Center, apply percentages
// User preferencesLocale
// Time of the day (apply darker themes during the night)

// import { errorText } from "textMixins";
// export default StyleSheet.create({
// 	formErrorMessage: {
// 		...errorText,
// 		fontSize: 22,
// 	},

// mt2: { marginTop: SPACING_S },
// flex1: { flex: 1 },
// flex2: { flex: 2 },
// flex3: { flex: 3 },
// dark_blue: { color: COLOR_DARK_BLUE },

import { StyleSheet } from 'react-native'

export const styleVariables = {
	primaryColor: '#23254F',  // Port Gore
	accentColor: '#EF9B2A',   // Carrot Orange
	error: '#D2473C',
	iconSize: 24
}

// export default StyleSheet.create({
// 	icon: {
// 		height: iconSize,
// 		width: iconSize,
// 		borderRadius: iconSize / 2 //make this a circle
// 	}
// });
