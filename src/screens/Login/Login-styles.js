import { StyleSheet } from 'react-native';
import Metrics from '../../theme/Metrics';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		paddingHorizontal: 40,
		paddingTop: 100,
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
	logo: {
		top: 40,
		right: 15,
		width: 50,
		height: 50,
		position: 'absolute'
	},
	yellowGradient: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.21,
		// borderBottomLeftRadius: 40,
		// borderBottomRightRadius: 40,
		zIndex: 0,
	},
	lightBackground: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.8,
		zIndex: -1,
	},
	registerContainer: {
		flexDirection: 'row',
		position: 'absolute',
		justifyContent: 'center',
		width: Metrics.screenWidth,
		bottom: 20,
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
		height: Metrics.screenHeight * 0.6,
	}
})