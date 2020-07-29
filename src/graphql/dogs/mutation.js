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