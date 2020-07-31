import { gql } from 'apollo-boost';

export const GET_NOTIFICATIONS = gql`
	query Notifications {
		notifications {
			id
			title
			description
		}
	}
`