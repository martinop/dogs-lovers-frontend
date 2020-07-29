import { Alert } from 'react-native';

export default function InfoAlert(title, subtitle, onPress) {
	return Alert.alert(
		title,
		subtitle,
		[
			{
				text: 'Ok',
				...(onPress && { onPress }),
			},
		],
		{ cancelable: false }
	);
}
