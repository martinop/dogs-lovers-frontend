import { StyleSheet } from 'react-native';
import Metrics from '../../theme/Metrics';

export default StyleSheet.create({
	avoidingView: {
		flex: 1,
		height: '100%',
		width: Metrics.screenWidth,
	},
	container: {
		paddingTop: 100,
		height: '100%',
	},
	paddingHorizontal: {
		paddingHorizontal: 40,
	},
	headerText: {
		fontSize: 24,
		marginLeft: 40,
		fontWeight: "600"
	},
	yellowGradient: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.21,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		zIndex: 0,
	},
	lightBackground: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.8,
		zIndex: -1,
	},
	content: {
		marginTop: 60,
		height: Metrics.screenHeight * 0.6,
	},
	backBtn: {
		width: 40,
	},
	backBtnContainer: {
		top: 35,
		position: 'absolute',
		left: 30,
		zIndex: 2,
	},
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
	contentContainer: {
		paddingBottom: 60,
	}
})