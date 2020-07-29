import { StyleSheet } from 'react-native';
import Metrics from '../../theme/Metrics';

export default StyleSheet.create({
	box: {
		marginRight: 20,
	},
	addBox: {
		backgroundColor: '#ffc402',
	},
	list: {
		paddingVertical: 20,
		paddingHorizontal: 40,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	textValue: {
		fontSize: 16,
		fontWeight: '500'
	},
	label: {
		fontWeight: "600",
		fontSize: 22,
		marginLeft: 40,
	},
	modalContent: {
		backgroundColor: 'white',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		maxHeight: Metrics.screenHeight * 0.8,
	},
	item: {
		marginHorizontal: 20,
		paddingVertical: 15,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
})