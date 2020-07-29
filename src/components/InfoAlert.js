import { Alert } from 'react-native';

export default (title, subtitle, onPress) =>
	Alert.alert(
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
