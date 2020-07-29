import React from 'react';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-community/async-storage';
import { useMutation } from '@apollo/react-hooks';
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from './Login-styles';
import VText from '../../components/VText';
import YellowGradient from '../../components/YellowGradient';
import LighBackground from '../../components/LightBackground';
import VTextInput from '../../components/VTextInput';
import VButton from '../../components/VButton/VButton';
import InfoAlert from '../../components/InfoAlert';
import validateLogin from '../../validations/login';
import { LOGIN } from '../../graphql/auth/mutations';
function Login(props) {
	const { navigation } = props; 
	const [login, { loading }] = useMutation(LOGIN);
	async function handleLogin(values) {
		try {
			const { data } = await login({
				variables: {
					email: values.email,
					password: values.password,
				},
			});
			await AsyncStorage.setItem('dogs-lovers-token', data?.login?.data.token);
			await AsyncStorage.setItem('dogs-lovers-role', data?.login?.data?.role);
			navigation.reset({
				index: 0,
				routes: [{ name: data?.login?.data?.role === "USER" ? "SignedInClient" : "SignedInVeterinarian" }],
			});
		} catch (error) {
			console.log(error)
			InfoAlert('Algo salio mal', error?.graphQLErrors?.[0]?.message);

		}
	}

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={handleLogin}
			validate={validateLogin}
			validateOnBlur
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty, touched }) => {
				const isFormValid = isValid && dirty;
				const isDisabled = !isFormValid || loading;
				return (
					<KeyboardAvoidingView style={styles.avoidingView} behavior="position">
						<View style={styles.container}>
							<YellowGradient style={styles.yellowGradient} />
							<VText style={styles.title}>Iniciar Sesión</VText>
							<VText style={styles.subTitle}>Por favor ingresa para continuar</VText>
							<View style={styles.content}>
								<VTextInput
									placeholder="Correo Electronico"
									error={touched.email && errors?.email}
									onChangeText={handleChange('email')}
									onBlur={handleBlur('email')}
									value={values.email}
								/>
								<VTextInput
									placeholder="Contraseña"
									error={touched.password && errors?.password}
									onChangeText={handleChange('password')}
									onBlur={handleBlur('password')}
									value={values.password}
									secureTextEntry
								/>
								<VButton
									text="Ingresar"
									disabled={isDisabled}
									onPress={handleSubmit}
									loading={loading}
								/>
							</View>
							<LighBackground style={styles.lightBackground} />
							<View style={styles.registerContainer}>
								<VText style={styles.registerLabel}>Aún no tienes una cuenta?</VText>
								<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
									<VText style={styles.registerCTA}>Registrate</VText>
								</TouchableOpacity>
							</View>
						</View>
					</KeyboardAvoidingView>
				)
			}}
		</Formik>
	)
}

export default Login;