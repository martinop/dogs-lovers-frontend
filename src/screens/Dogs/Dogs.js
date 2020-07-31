import React from 'react';
import { useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './Dogs-styles';
import { GET_DOGS } from '../../graphql/dogs/query';
import { BoxShadow, YellowGradient, LightBackground, VText } from '../../components';
function Dogs(props) {
	const { navigation } = props;
	const { data, loading, refetch } = useQuery(GET_DOGS, { fetchPolicy: "network-only" })

	async function onLogout() {
		await AsyncStorage.removeItem('dogs-lovers-token');
		await AsyncStorage.removeItem('dogs-lovers-role');
		navigation.replace('Auth');
	}

	return (
		<View style={styles.container}>
			<YellowGradient style={styles.yellowGradient} />
			<TouchableOpacity style={styles.logoutContainer} onPress={onLogout}>
				<Image source={require('../../images/logout.png')} resizeMode="contain"  style={styles.notification} />
			</TouchableOpacity>
			<View style={styles.headerContainer}>
				<VText style={styles.headerText}>Lista de Caninos</VText>
				<VText style={styles.subTitle}>Todos los caninos registrados</VText>
			</View>
			<FlatList
				keyExtractor={item => item.id.toString()}
				style={styles.content}
				contentContainerStyle={styles.contentContainer}
				data={data?.dogs}
				refreshing={loading}
				onRefresh={refetch}
				renderItem={({ item, index }) => (
					<TouchableOpacity key={`dog-${index + 1}`} activeOpacity={0.8}>
						<BoxShadow style={styles.box}>
							<Image
								source={require('../../images/dog.png')}
								resizeMode="contain"
								style={styles.dog}
							/>
							<View style={styles.textContainer}>
								<VText style={styles.dogName}>{item.name}</VText>
								<VText style={styles.dogAge}>{getAgeStatus(item.age)}</VText>
							</View>
						</BoxShadow>
					</TouchableOpacity>
				)}
			/>
			<LightBackground style={styles.lightBg} />
		</View>
	)
}


function getAgeStatus(age) {
	if(age === 0 || age === 1) return "Cachorro";
	if(age > 1 && age <= 3) return "Adolescente";
	if(age > 3 && age <= 8) return "Adulto";
	return "Adulto Mayor";

}
export default Dogs;