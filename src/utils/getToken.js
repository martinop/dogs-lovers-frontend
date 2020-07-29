import AsyncStorage from '@react-native-community/async-storage';

export default async () => {
	try {
		const value = await AsyncStorage.getItem('dogs-lovers-token');
		return value;
	} catch (error) {
		return null;
	}
};
