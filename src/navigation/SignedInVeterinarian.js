import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';

const Stack = createStackNavigator();

export default function SignedInVeterinarian() {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Notifications" component={Notifications} />
		</Stack.Navigator>
	);
}
