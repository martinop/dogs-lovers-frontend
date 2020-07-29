import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Home-styles';
import { GET_MY_DOG } from '../../graphql/dogs/query';
import { BoxShadow, YellowGradient, LightBackground, Loading, VText, VButton } from '../../components';
function Home(props) {
	const { navigation } = props;
	const { data, loading, fetchMore } = useQuery(GET_MY_DOG, { fetchPolicy: "network-only" })
	const dog = data?.myDog;

	async function onLogout() {
		await AsyncStorage.removeItem('dogs-lovers-token');
		await AsyncStorage.removeItem('dogs-lovers-role');
		navigation.replace('Auth');
	}

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', async () => {
			if(!dog) fetchMore({ updateQuery: (prev, { fetchMoreResult }) => fetchMoreResult});
    });

    return unsubscribe;
	}, [navigation, fetchMore, dog])

	if(loading) {
		return <Loading />
	}

	return (
		<View style={styles.container}>
			<YellowGradient style={styles.yellowGradient} />
			<TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate("Notifications")}>
				<Image source={require('../../images/notification.png')} resizeMode="contain"  style={styles.notification} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.logoutContainer} onPress={onLogout}>
				<Image source={require('../../images/logout.png')} resizeMode="contain"  style={styles.notification} />
			</TouchableOpacity>
			<View style={styles.headerContainer}>
				{dog ? (
					<>
						<Image source={require('../../images/dog.png')} resizeMode="contain" style={styles.dog} />
						<View style={styles.headerTextContainer}>
							<VText style={styles.headerText}>Mi nombre es {dog?.name}</VText>
							<VText style={styles.headerText}>y tengo {dog?.age} años.</VText>
						</View>
					</>
				) : <VText style={styles.emptyTitle}>Parece que aún no has agregado a tu canino.</VText>}
			</View>
			{dog && (
				<ScrollView style={styles.scroll}>
					<VText style={styles.label}>Enfermedades</VText>
					<View style={styles.list}>
						{dog?.diseases?.map(disease => (
							<BoxShadow key={disease.id} style={styles.box}>
								<VText style={styles.textValue}>{disease.name}</VText>
							</BoxShadow>
						))}
					</View>

					<VText style={styles.label}>Medicamentos</VText>
					<View style={styles.list}>
						{dog?.medicaments?.map(disease => (
							<BoxShadow key={disease.id} style={styles.box}>
								<VText style={styles.textValue}>{disease.name}</VText>
							</BoxShadow>
						))}
					</View>
					<VText style={styles.label}>Vacunas</VText>
					<View style={styles.list}>
						{dog?.vaccines?.map(disease => (
							<BoxShadow key={disease.id} style={styles.box}>
								<VText style={styles.textValue}>{disease.name}</VText>
							</BoxShadow>
						))}
					</View>
				</ScrollView>
			)}

			{!dog && (
				<View style={styles.emptyContainer}>
					<VButton text="Agregar Canino" onPress={() => navigation.navigate("Create")} />
				</View>
			)}

			<LightBackground style={styles.lightBg} />
		</View>
	)
}

export default Home;