/* flow */

import {StackNavigator} from 'react-navigation';

import PomoScreen from '../screens/Pomodoro/PomoScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import ScheScreen from '../screens/Scheduler/ScheScreen'
import SettScreen from '../screens/Settings/SettScreen'

const stackNavigatorConfig = {
	initialRouteName: 'Sche',
};

export default StackNavigator({
	Home: {screen: HomeScreen},
	Pomo: {screen: PomoScreen},
	Sche: {screen: ScheScreen},
	Sett: {screen: SettScreen}
}, stackNavigatorConfig);