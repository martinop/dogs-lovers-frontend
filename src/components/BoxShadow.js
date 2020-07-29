import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import VText from './VText';

function BoxShadow(props) {
	const { children, style, onPress } = props;
	const Wrapper = onPress ? TouchableOpacity : View;
	const _styles = StyleSheet.flatten([styles.container, style]);
	const _props = onPress ? { style: _styles, onPress } : { style: _styles };
	return (
		<Wrapper {..._props}>
			{children}
		</Wrapper>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 15,
		marginBottom: 20,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.15,
		shadowRadius: 3,
		elevation: 3,
	}
})
export default BoxShadow;