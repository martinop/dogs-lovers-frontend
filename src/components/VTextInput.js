import React from 'react';
import { View, TextInput as _TextInput, StyleSheet } from 'react-native';
import VText from './VText';

function VTextInput(props) {
	const { placeholder, style, error, ...restProps } = props;
	return (
		<View style={styles.container}>
			<_TextInput
				placeholder={placeholder}
				style={StyleSheet.flatten([styles.input, style])}
				placeholderTextColor="#474747"
				{...restProps}
			/>
			{error && <VText style={styles.textError}>{error}</VText>}
		</View>

	)
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	textError: {
		color: '#ff3d51',
		marginTop: 5,
		fontWeight: "500",
		fontSize: 16,
		paddingHorizontal: 20,
	},
	input: {
		borderRadius: 100,
		backgroundColor: '#F2F2F2',
		paddingVertical: 20,
		paddingHorizontal: 30,
		fontSize: 16,
		color: 'black',
		letterSpacing: 0.35,
	},
})

export default VTextInput;