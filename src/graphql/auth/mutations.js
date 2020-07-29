import { gql } from 'apollo-boost';

export const LOGIN = gql`
	mutation(
		$email: String!
		$password: String!
		$role: String!
	) {
		login(
			input: {
				email: $email
				password: $password
				role: $role
			}
		) {
			message
			data {
				token
			}
		}
	}
`;

export const SIGN_UP = gql`
	mutation(
		$email: String!
		$password: String!
		$role: String!
	) {
		signUp(
			input: {
				email: $email
				password: $password
				role: $role
			}
		) {
			message
			token
		}
	}
`;
