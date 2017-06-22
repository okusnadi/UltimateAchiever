/* flow */

import {StackNavigator} from 'react-navigation';

import PomoScreen from './containers/PomoScreen'
import HomeScreen from './containers/HomeScreen'

const stackNavigatorConfig = {
	initialRouteName: 'Home',
};

export default StackNavigator({
	Home: {screen: HomeScreen},
	Pomo: {screen: PomoScreen},
}, stackNavigatorConfig);