import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

function LighBackground(props) {
	const { style } = props;
	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}
			colors={["#fffcf5", "#fff9e6"]}
			style={StyleSheet.flatten([styles.container, style])}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
	}
})

export default LighBackground