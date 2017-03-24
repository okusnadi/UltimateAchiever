import React, {Component} from 'react'
import {
	AppRegistry, Button,
	Text, View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import PomoScreen from './Pomodoro/PomoScreen'
import HomeScreen from './Home/HomeScreen'

const UltimateAchiever = StackNavigator({
	Home: { screen: HomeScreen },
	Pomo: { screen: PomoScreen },
})

AppRegistry.registerComponent('UltimateAchiever', () => UltimateAchiever)