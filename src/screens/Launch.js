import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

function LaunchScreen(props) {
	const { navigation } = props;
	useEffect(() => {
		async function handleToken() {
			const token = await AsyncStorage.getItem('dogs-lovers-token');
			if(token) {
				const role = await AsyncStorage.getItem('dogs-lovers-role');
				navigation.replace(role === "VETERINARIAN" ? "SignedInVeterinarian" : "SignedInClient");
			} else {
				navigation.replace('Auth');
			}
		}

		handleToken();
	}, [navigation]);
	return null;
}

export default LaunchScreen;