const { gql } = require('apollo-server');

//Schemas
const vetSchema = gql`
	type Vet {
		_id: ID
		id: String
		fullname: String
		email: String
		phone: Float
		clinic: String
		create_at: String
	}

	#Inputs
	input VetInput {
		id: String!
		fullname: String!
		email: String!
		phone: Float!
		clinic: String!
	}

	input VetIdInput {
		id: ID!
	}

	input VetUpdateByIdInput {
		id: ID!
		email: String
		phone: Float
	}

	#Querys and mutation
	type Query {
		getAllVets: [Vet]
		getVetById(id: String!): Vet
	}
	type Mutation {
		newVet(input: VetInput): Vet
		deleteVetById(input: VetIdInput): String
		updateVetById(input: VetUpdateByIdInput): Vet
	}
`;

module.exports = vetSchema;
