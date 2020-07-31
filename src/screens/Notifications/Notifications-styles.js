import { StyleSheet } from 'react-native';
import Metrics from '../../theme/Metrics';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: Metrics.screenWidth,
	},
	paddingHorizontal: {
		paddingHorizontal: 40,
	},
	headerContainer: {
		marginTop: 100,
	},
	title: {
		fontWeight: "700",
		fontSize: 36,
		marginLeft: 40,
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
		marginTop: 80,
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
	contentContainer: {
		paddingBottom: 60,
	},
	notificationTitle: {
		fontSize: 22,
		fontWeight: "500",
	},
	box: {
		marginHorizontal: 40,
	},
	notificationDescription: {
		fontSize: 16,
	},
	empty: {
		marginTop: 80,
		textAlign: 'center',
		fontSize: 22,
		fontStyle: 'italic',
		opacity: 0.7,
		color: 'gray',
	}
})