import React from 'react';
import { Formik } from 'formik';
import { useQuery, useMutation } from '@apollo/client';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './DogDetails-styles';
import { YellowGradient, SelectableList, VText, LightBackground, VButton, Loading, InfoAlert } from '../../components';
import { GET_DOG, GET_PROPS } from '../../graphql/dogs/query';
import { UPDATE_DOG } from '../../graphql/dogs/mutation';
function DogDetails(props) {
	const { navigation, route } = props; 
	const { data, loading } = useQuery(GET_DOG, { fetchPolicy: "network-only", variables: { id: route?.params?.id }});
	const { data: dataProps } = useQuery(GET_PROPS);
	const [update, { loading: loadingUpdate }] = useMutation(UPDATE_DOG)

	const properties = dataProps?.props;

	async function handleSave(values) {
		try {
			const { data: response } = await update({
				variables: {
					id: +data?.dog?.id,
					owner: +data?.dog?.owner?.id,
					medicaments: values.medicaments?.map(e => ({ id: e.id })),
					vaccines: values.vaccines?.map(e => ({ id: e.id })),
					diseases: values.diseases?.map(e => ({ id: e.id })),
				}
			})
			InfoAlert("Actualizado", response?.update?.message)
		} catch(e) {
			console.log(e)
			InfoAlert("Error", "Algo salio mal, intenta mas tarde")
		}
	}

	console.log({ data })
	if(!data?.dog || loading) return <Loading />
	return (
		<Formik
			initialValues={{ diseases: data?.dog?.diseases, vaccines: data?.dog?.vaccines, medicaments: data?.dog?.medicaments }}
			onSubmit={handleSave}
			validateOnBlur
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty, touched }) => {
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
				return (
					<View style={styles.avoidingView} behavior="padding">
						<TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
							<Image source={require('../../images/back.png')} style={styles.backBtn} resizeMode="contain" />
						</TouchableOpacity>
						<View style={styles.container}>
							<YellowGradient style={styles.yellowGradient} />
							<VText style={styles.headerText}>Mi nombre es {data?.dog?.name}</VText>
							<VText style={styles.headerText}>y tengo {data?.dog?.age} años.</VText>
							<ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
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
									text="Actualizar"
									loading={loadingUpdate}
									disabled={loadingUpdate}
									onPress={handleSubmit}
									containerStyle={styles.paddingHorizontal}
								/>
							</ScrollView>
							<LightBackground style={styles.lightBackground} />
						</View>
					</View>
				)
			}}
		</Formik>
	)
}

export default DogDetails;