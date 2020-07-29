import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Login-styles';
import VText from '../../components/VText';
import YellowGradient from '../../components/YellowGradient';
import LighBackground from '../../components/LightBackground';
function Login(props) {
	const { navigation } = props; 
	return (
		<View style={styles.container}>
			<YellowGradient style={styles.yellowGradient} />
			<Image source={require('../../images/logo.png')} style={styles.logo} resizeMode="contain" />
			<VText style={styles.title}>Iniciar Sesión</VText>
			<VText style={styles.subTitle}>Por favor ingresa para continuar</VText>
			<View style={styles.content}>

			</View>
			<LighBackground style={styles.lightBackground} />
			<View style={styles.registerContainer}>
				<VText style={styles.registerLabel}>Aún no tienes una cuenta?</VText>
				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<VText style={styles.registerCTA}>Registrate</VText>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Login;