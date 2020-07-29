import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

function YellowGradient(props) {
	const { style } = props;
	return (
		<LinearGradient
			start={{ x: 0, y: 0} }
			end={{ x: 1, y: 0 }}
			colors={["#ffc402", "#ebae00"]}
			style={StyleSheet.flatten([styles.container, style])}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
	}
})

export default YellowGradient