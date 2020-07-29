import React from 'react';
import { Formik } from 'formik';
import { useQuery } from '@apollo/client';
import { View, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './Create-styles';
import validateCreateDog from '../../validations/createDog';
import { GET_PROPS } from '../../graphql/dogs/query';
import { VTextInput, YellowGradient, SelectableList, VText, LightBackground, VButton } from '../../components';
function Create(props) {
	const { navigation } = props; 
	const { data, loading } = useQuery(GET_PROPS);
	const properties = data?.props;

	async function handleCreate(values) {}

	return (
		<Formik
			initialValues={{ name: '', age: '', medicaments: [], vaccines: [], diseases: [] }}
			onSubmit={handleCreate}
			validate={validateCreateDog}
			validateOnBlur
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty, touched }) => {
				const isFormValid = isValid && dirty;
				const isDisabled = !isFormValid || loading;

				function onSelectEntity(entry, fieldName) {
					const exist = values[fieldName].some(e => e.id === entry.id);
					if(exist) {
						const val = values[fieldName].filter(e => e.id !== entry.id)
						handleChange(fieldName)({ target: { value: val }})
					} else {
						const val = [...values[fieldName], entry];
						handleChange(fieldName)({ target: { value: val }})
					}
				}

				function onSelectDisease(disease) {
					onSelectEntity(disease, "diseases");
				}

				function onSelectMedicament(medicament) {
					onSelectEntity(medicament, "medicaments");
				}

				function onSelectVaccine(vaccine) {
					onSelectEntity(vaccine, "vaccines");
				}
				console.log(values);
				return (
					<KeyboardAvoidingView style={styles.avoidingView} behavior="padding">
						<TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
							<Image source={require('../../images/back.png')} style={styles.backBtn} resizeMode="contain" />
						</TouchableOpacity>
						<View style={styles.container}>
							<YellowGradient style={styles.yellowGradient} />
							<VText style={styles.title}>Agregar Canino</VText>
							<ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
								<View style={styles.paddingHorizontal}>
									<VTextInput
										placeholder="Nombre"
										error={touched.name && errors?.name}
										onChangeText={handleChange('name')}
										onBlur={handleBlur('name')}
										value={values.name}
									/>
									<VTextInput
										placeholder="Edad"
										error={touched.age && errors?.age}
										onChangeText={handleChange('age')}
										onBlur={handleBlur('age')}
										value={values.age}
										secureTextEntry
									/>
								</View>
								<SelectableList
									title="Enfermedades"
									name="diseases"
									selected={values.diseases}
									options={properties?.diseases}
									onSelect={onSelectDisease}
								/>
								<SelectableList
									title="Medicamentos"
									name="medicaments"
									selected={values.medicaments}
									options={properties?.medicaments}
									onSelect={onSelectMedicament}
								/>
								<SelectableList
									title="Vacunas"
									name="vaccines"
									selected={values.vaccines}
									options={properties?.vaccines}
									onSelect={onSelectVaccine}
								/>
								<VButton
									text="Agregar"
									disabled={isDisabled}
									loading={loading}
									onPress={handleSubmit}
									containerStyle={styles.paddingHorizontal}
								/>
							</ScrollView>
							<LightBackground style={styles.lightBackground} />
						</View>
					</KeyboardAvoidingView>
				)
			}}
		</Formik>
	)
}

export default Create;