import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function Loading() {
	return (
		<View style={{ marginTop: 80 }}>
			<ActivityIndicator size="large" />
		</View>
	)
}

export default Loading;