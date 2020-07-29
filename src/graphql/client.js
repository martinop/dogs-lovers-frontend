import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import getToken from '../utils/getToken';
import { navigate } from '../utils/navigation';

export default new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	onError: ({ graphQLErrors, forward, operation }) => {
		const error = graphQLErrors?.[0];
		if (error && error.message === 'UNAUTHORIZED') {
			AsyncStorage.removeItem('dogs-lovers-token');
			AsyncStorage.removeItem('dogs-lovers-role');
			navigate('Auth');
			forward(operation);
		}
		return forward(operation);
	},
	request: async operation => {
		const token = await getToken();
		if (token) {
			operation.setContext({
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		}
	},
});
