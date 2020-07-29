import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dogs from '../screens/Dogs';
import DogDetails from '../screens/DogDetails';

const Stack = createStackNavigator();

export default function SignedInVeterinarian() {
	return (
		<Stack.Navigator initialRouteName="Dogs" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Dogs" component={Dogs} />
			<Stack.Screen name="DogDetails" component={DogDetails} />
		</Stack.Navigator>
	);
}
