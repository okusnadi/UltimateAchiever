/* flow */

import {StackNavigator} from 'react-navigation';

import PomoScreen from './containers/Pomodoro/PomoScreen'
import HomeScreen from './containers/Home/HomeScreen'

const stackNavigatorConfig = {
	initialRouteName: 'Home',
};

export default StackNavigator({
	Home: {screen: HomeScreen},
	Pomo: {screen: PomoScreen},
}, stackNavigatorConfig);