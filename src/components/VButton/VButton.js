import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import styles from './VButton-styles';
import LinearGradient from 'react-native-linear-gradient';

const activeColors = ["#ffc402", "#ebae00"];
const disabledColors = ["#dedede", "#c9c9c9"];
function VButton(props) {
	const { text, disabled, style, loading, onPress } = props;
	return (
		<TouchableOpacity
			activeOpacity={disabled ? 1 : 0.8}
			{...!disabled && { onPress }}
		>
			<LinearGradient
				start={{ x: 0, y: 0} }
				end={{ x: 1, y: 0 }}
				colors={disabled ? disabledColors : activeColors}
				style={StyleSheet.flatten([styles.btn, style])}
			>
				{loading && <ActivityIndicator color="white" style={styles.loader} />}
				<Text style={styles.btnText}>{text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

export default VButton;