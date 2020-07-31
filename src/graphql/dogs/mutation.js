import { gql } from 'apollo-boost';

export const CREATE_DOG = gql`
	mutation(
		$name: String!
		$age: Int!
		$vaccines: [InputVaccine]
		$medicaments: [InputMedicament]
		$diseases: [InputDisease]

	) {
		create(
			input: {
				name: $name
				age: $age
				diseases: $diseases
				medicaments: $medicaments
				vaccines: $vaccines
			}
		) {
			message
		}
	}
`;

export const UPDATE_DOG = gql`
	mutation(
		$owner: Int!
		$id: Int!
		$vaccines: [InputVaccine]
		$medicaments: [InputMedicament]
		$diseases: [InputDisease]

	) {
		update(
			input: {
				id: $id
				owner: $owner
				diseases: $diseases
				medicaments: $medicaments
				vaccines: $vaccines
			}
		) {
			message
		}
	}
`;