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
	notificationContainer: {
		position: 'absolute',
		padding: 20,
		right: 40,
		top: 10,
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
	scroll: {
		marginTop: 50
	},
	label: {
		fontWeight: "600",
		fontSize: 22,
		marginLeft: 30,
	},
	empty: {
		fontWeight: "400",
		fontStyle: 'italic',
		color: 'gray',
		opacity: 0.7,
		fontSize: 22,
		marginLeft: 30,
		marginTop: 10,
	},
	list: {
		paddingHorizontal: 30,
		paddingVertical: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	textValue: {
		fontSize: 16,
		fontWeight: '500'
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100,
	},
	headerTextContainer: {
		flex: 1,
	},
	dog: {
		height: 70,
		width: 120,
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
		marginRight: 20,
	},
	yellowGradient: {
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.21,
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
		zIndex: 0,
	},
	emptyContainer: {
		height: Metrics.screenHeight * 0.75,
		marginTop: 30,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	emptyCTA: {
		fontSize: 24,
		color: 'gray',
	}
})