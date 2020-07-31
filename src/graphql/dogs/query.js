import { gql } from 'apollo-boost';

export const GET_DOGS = gql`
	query dogs {
		dogs {
			id
			name
			age
		}
	}
`
export const GET_MY_DOG = gql`
	query myDog {
		myDog {
			id
			name
			age
			medicaments {
				name
				id
			}
			diseases {
				id
				name
			}
			vaccines {
				id
				name
			}
		}
	}
`;

export const GET_PROPS = gql`
	query props {
		props {
			vaccines {
				id
				name
			}
			medicaments {
				id
				name
			}
			diseases {
				id
				name
			}
		}
	}
`