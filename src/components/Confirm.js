import React from 'react'
import {View, Alert} from 'react-native'
import {observer, inject} from 'mobx-react'
import {strings} from '../config/strings'

const Confirm = inject('pomoStore')(
	observer(props => {
		const {containerStyle, textStyle, cardSectionStyle} = styles

		if (props.message == 'PomoBreak') {
			console.log('Confirm PomoBreak')
			accept = "props.pomoStore.changeStatus('abort')"
			decline = "props.pomoStore.changeStatus('break')"
			aTitle = 'Break started'
			aDescr = 'Start your break or skip it and go for next session'
		} else if (props.message == 'PomoAbort') {
			console.log('Confirm PomoAbort')
			accept = "props.pomoStore.changeStatus('abort')"
			decline = "props.pomoStore.clickedType = 'none'"
			aTitle = 'Break started'
			aDescr = 'Start your break or skip it and go for next session'
		}
		// todo move stuff to strings
		// todo maybe not cancelable in some cases?
		// todo remove either title or descr
		// todo add void last session btn

		return (
			<View>
				{Alert.alert(
					aTitle,
					aDescr,
					[
						{
							text: strings.start_break,
							onPress: () => eval(decline),
							style: 'cancel'
						},
						{
							text: strings.skip_break,
							onPress: () => eval(accept)
						}
					],
					{
						cancelable: false,
						onDismiss: () => eval(decline)
					}
				)}
			</View>
		)
	})
)

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
}

export {Confirm}
