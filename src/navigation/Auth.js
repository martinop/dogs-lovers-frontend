import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/SignUp';
import Login from '../screens/Login';

const AuthStack = createStackNavigator();

export default function Auth() {
	return (
		<AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Signup" component={Signup} />
		</AuthStack.Navigator>
	);
}
