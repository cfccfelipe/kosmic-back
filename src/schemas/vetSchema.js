const { gql } = require('apollo-server');

//Schemas
const vetSchema = gql`
	type Vet {
		_id: ID
		id: String
		fullname: String
		email: String
		phone: String
		clinic: String
		create_at: String
	}

	#Input
	#Mutation
	input VetInput {
		id: String!
		fullname: String!
		email: String!
		phone: String!
		clinic: String!
	}

	#Querys and mutation
	type Query {
		getAllVets: [Vet]
		getVetById(id: String!): Vet
	}
	type Mutation {
		newVet(input: VetInput): Vet
	}
`;

module.exports = vetSchema;
