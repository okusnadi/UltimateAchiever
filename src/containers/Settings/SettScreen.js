import React, {Component} from 'react'
import {Button, Text, View, Picker} from 'react-native'
import {observer, inject} from 'mobx-react'
import {Card} from '../../components'

@inject('pomoStore')
@observer
export default class SettScreen extends Component {
	static navigationOptions = {
		title: 'Settings'
		// Nav options can be defined as a function of the navigation prop:
		// title: ({ state }) => `Chat with ${state.params.user}`,
	}

	render() {
		console.log('Render SettScreen')
		const {navigate} = this.props.navigation
		// The screen's current route is passed in to `props.navigation.state`:
		const {params} = this.props.navigation.state
		return (
			<View>
				<Card>
					<View style={{flexDirection: 'row' ,padding: 10}}>
						<Text style={{flex: 0.66}}>PomoTimer</Text>
						<Picker
							style={{flex: 0.33, height: 20}}
							selectedValue={this.props.pomoStore.timeSession}
							onValueChange={(itemValue, itemIndex) => this.props.pomoStore.setTimeSession('timeSession', itemValue)}>
							<Picker.Item label="10" value="10" />
							<Picker.Item label="15" value="15" />
							<Picker.Item label="20" value="20" />
							<Picker.Item label="25" value="25" />
							<Picker.Item label="30" value="30" />
							<Picker.Item label="35" value="35" />
							<Picker.Item label="40" value="40" />
							<Picker.Item label="45" value="45" />
							<Picker.Item label="50" value="50" />
							<Picker.Item label="55" value="55" />
							<Picker.Item label="60" value="60" />
						</Picker>
					</View>
					<View style={{flexDirection: 'row' ,padding: 10}}>
						<Text style={{flex: 0.66}}>PomoBreak</Text>
						<Picker
							style={{flex: 0.33, height: 20}}
							selectedValue={this.props.pomoStore.timeBreak}
							onValueChange={(itemValue, itemIndex) => this.props.pomoStore.setTimeSession('timeBreak', itemValue)}>
							<Picker.Item label="5" value="5" />
							<Picker.Item label="10" value="10" />
							<Picker.Item label="15" value="15" />
							<Picker.Item label="20" value="20" />
							<Picker.Item label="25" value="25" />
							<Picker.Item label="30" value="30" />
							<Picker.Item label="35" value="35" />
							<Picker.Item label="40" value="40" />
							<Picker.Item label="45" value="45" />
							<Picker.Item label="50" value="50" />
							<Picker.Item label="55" value="55" />
							<Picker.Item label="60" value="60" />
						</Picker>
					</View>
					<View style={{flexDirection: 'row' ,padding: 10}}>
						<Text style={{flex: 0.66}}>PomoPause</Text>
						<Picker
							style={{flex: 0.33, height: 20}}
							selectedValue={this.props.pomoStore.timePause}
							onValueChange={(itemValue, itemIndex) => this.props.pomoStore.setTimeSession('timePause', itemValue)}>
							<Picker.Item label="5" value="5" />
							<Picker.Item label="10" value="10" />
							<Picker.Item label="15" value="15" />
							<Picker.Item label="20" value="20" />
							<Picker.Item label="25" value="25" />
							<Picker.Item label="30" value="30" />
							<Picker.Item label="35" value="35" />
							<Picker.Item label="40" value="40" />
							<Picker.Item label="45" value="45" />
							<Picker.Item label="50" value="50" />
							<Picker.Item label="55" value="55" />
							<Picker.Item label="60" value="60" />
						</Picker>
					</View>
				</Card>
			</View>
		)
	}
}
