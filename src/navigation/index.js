import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignedInClient from './SignedInClient';
import SignedInVeterinarian from './SignedInVeterinarian';
import Launch from '../screens/Launch';
import Auth from './Auth';
import { navigationRef } from '../utils/navigation';

const MainStack = createStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer fallback={<Text>Loading...</Text>} ref={navigationRef}>
			<MainStack.Navigator initialRouteName="Launch" screenOptions={{ headerShown: false }}>
				<MainStack.Screen name="Launch" component={Launch} />
				<MainStack.Screen name="Auth" component={Auth} />
				<MainStack.Screen name="SignedInClient" component={SignedInClient} />
				<MainStack.Screen name="SignedInVeterinarian" component={SignedInVeterinarian} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
