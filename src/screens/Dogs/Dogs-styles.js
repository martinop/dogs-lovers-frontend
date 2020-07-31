import { StyleSheet } from 'react-native';
import Metrics from '../../theme/Metrics';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		backgroundColor: 'red',
		width: Metrics.screenWidth,
	},
	lightBg: {
		height: '100%',
		width: '100%',
		zIndex: -1
	},
	logoutContainer: {
		position: 'absolute',
		padding: 20,
		right: 0,
		top: 10,
	},
	notification: {
		width: 30,
	},
	headerContainer: {
		marginTop: 100,
		marginLeft: 40,
	},
	subTitle: {
		fontWeight: "500",
		fontSize: 18,
		color: 'white',
	},
	headerTextContainer: {
		flex: 1,
	},
	dog: {
		height: 70,
		width: 70,
		marginRight: 20,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "600"
	},
	emptyTitle: {
		fontSize: 24,
		fontWeight: "600",
		paddingHorizontal: 30,
	},
	box: {
		marginHorizontal: 40,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	yellowGradient: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.21,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		zIndex: 0,
	},
	content: {
		marginTop: 80,
		height: Metrics.screenHeight * 0.6,
	},
	contentContainer: {
		paddingBottom: 60,
	},
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	dogName: {
		fontSize: 22,
		fontWeight: '500',
	},
	dogAge: {
		fontSize: 16,
	}
})