/* flow */

import {StackNavigator} from 'react-navigation';

import PomoScreen from './containers/Pomodoro/PomoScreen'
import HomeScreen from './containers/Home/HomeScreen'
import ScheScreen from './containers/Scheduler/ScheScreen'

const stackNavigatorConfig = {
	initialRouteName: 'Pomo',
};

export default StackNavigator({
	Home: {screen: HomeScreen},
	Pomo: {screen: PomoScreen},
	Sche: {screen: ScheScreen}
}, stackNavigatorConfig);