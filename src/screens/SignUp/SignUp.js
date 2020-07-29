import React from 'react';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-community/async-storage';
import { useMutation } from '@apollo/react-hooks';
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from './SignUp-styles';
import VText from '../../components/VText';
import YellowGradient from '../../components/YellowGradient';
import LighBackground from '../../components/LightBackground';
import VTextInput from '../../components/VTextInput';
import VButton from '../../components/VButton/VButton';
import InfoAlert from '../../components/InfoAlert';
import validateSignUp from '../../validations/signup';
import { SIGN_UP } from '../../graphql/auth/mutations';
function SignUp(props) {
	const { navigation } = props; 
	const [signup, { loading }] = useMutation(SIGN_UP);
	async function handleSignUp(values) {
		try {
			const { data } = await signup({
				variables: {
					email: values.email,
					password: values.password,
					role: "USER",
				},
			});
			await AsyncStorage.setItem('dogs-lovers-token', data?.signUp.token);
			await AsyncStorage.setItem('dogs-lovers-role', "USER");
			navigation.reset({
				index: 0,
				routes: [{ name: 'SignedInClient' }],
			});
		} catch (error) {
			InfoAlert('Algo salio mal', error?.graphQLErrors?.[0]?.message || error.message);

		}
	}

	return (
		<Formik
			initialValues={{ email: '', password: '', role: 'USER', repeatPassword: '' }}
			onSubmit={handleSignUp}
			validate={validateSignUp}
			validateOnBlur
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty, touched }) => {
				const isFormValid = isValid && dirty;
				const isDisabled = !isFormValid || loading;
				return (
					<KeyboardAvoidingView style={styles.avoidingView} behavior="position">
						<TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
							<Image source={require('../../images/back.png')} style={styles.backBtn} resizeMode="contain" />
						</TouchableOpacity>
						<View style={styles.container}>
							<YellowGradient style={styles.yellowGradient} />
							<VText style={styles.title}>Registrarse</VText>
							<VText style={styles.subTitle}>Para poder ingresar debes registrarte</VText>
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
								<VTextInput
									placeholder="Repetir Contraseña"
									error={touched.repeatPassword && errors?.repeatPassword}
									onChangeText={handleChange('repeatPassword')}
									onBlur={handleBlur('repeatPassword')}
									value={values.repeatPassword}
									secureTextEntry
								/>
								<VButton
									text="Registrarse"
									disabled={isDisabled}
									loading={loading}
									onPress={handleSubmit}
								/>
							</View>
							<LighBackground style={styles.lightBackground} />
						</View>
					</KeyboardAvoidingView>
				)
			}}
		</Formik>
	)
}

export default SignUp;