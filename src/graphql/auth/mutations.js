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
			}
		) {
			message
			data {
				token
				role
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
