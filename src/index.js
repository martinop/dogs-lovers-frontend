import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from './graphql/client';
import Navigation from './navigation';

export default function App() {
	return (
		<ApolloProvider client={ApolloClient}>
			<Navigation />
			<SafeAreaView />
		</ApolloProvider>
	);
}
