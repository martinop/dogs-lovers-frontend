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
	registerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		width: Metrics.screenWidth,
		bottom: 30,
	},
	registerLabel: {
		fontWeight: "500",
		fontSize: 16,
	},
	registerCTA: {
		fontWeight: "700",
		fontSize: 16,
		marginLeft: 5,	
		color: "#ffc402",	
	},
	content: {
		marginTop: 60,
		justifyContent: 'flex-end',
		height: Metrics.screenHeight * 0.6,
	}
})