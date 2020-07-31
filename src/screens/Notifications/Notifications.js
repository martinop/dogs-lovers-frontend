import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_NOTIFICATIONS } from '../../graphql/notifications/query';
import { YellowGradient, LightBackground, VText, BoxShadow } from '../../components';
import styles from './Notifications-styles';
function Notifications(props) {
	const { navigation } = props;
	const { data, loading, refetch } = useQuery(GET_NOTIFICATIONS, { fetchPolicy: "network-only" });
	return (
		<View style={styles.container} behavior="padding">
			<TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
				<Image source={require('../../images/back.png')} style={styles.backBtn} resizeMode="contain" />
			</TouchableOpacity>
			<YellowGradient style={styles.yellowGradient} />
			<View style={styles.headerContainer}>
				<VText style={styles.title}>Notificaciones</VText>
			</View>
			<FlatList
				style={styles.content}
				contentContainerStyle={styles.contentContainer}
				keyExtractor={item => item.id.toString()}
				data={data?.notifications}
				refreshing={loading}
				onRefresh={refetch}
				renderItem={({ item, index }) => (
					<View key={`notification-${index + 1}`}>
						<BoxShadow style={styles.box}>
							<VText style={styles.notificationTitle}>{item.title}</VText>
							<VText style={styles.notificationDescription}>{item.description}</VText>
						</BoxShadow>
					</View>
				)}
			/>

			<LightBackground style={styles.lightBackground} />
		</View>
	)
}

export default Notifications;