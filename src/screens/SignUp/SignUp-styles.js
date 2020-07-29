import { StyleSheet } from 'react-native';
import Metrics from '../../theme/Metrics';

export default StyleSheet.create({
	avoidingView: {
		flex: 1,
		height: '100%',
		width: Metrics.screenWidth,
	},
	container: {
		paddingHorizontal: 40,
		paddingTop: 100,
		height: '100%',
	},
	title: {
		fontWeight: "700",
		fontSize: 36,
	},
	subTitle: {
		fontWeight: "500",
		fontSize: 18,
		color: 'white',
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
		justifyContent: 'flex-end',
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
	}
})