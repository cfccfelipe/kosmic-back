const { gql } = require('apollo-server');

//Schemas
const recordSchema = gql`
	type Record {
		id: ID
		event_date: String
		temperature: Float
		heart_rate: Float
		breathing_rate: Float
		create_at: String
	}

	#Inputs
	input RecordInput {
		event_date: String!
		temperature: Float!
		heart_rate: Float!
		breathing_rate: Float!
	}

	input RecordIdInput {
		id: ID!
	}

	#Querys and mutation
	type Query {
		getAllRecords: [Record]
		getRecordById(id: String!): Record
	}
	type Mutation {
		newRecord(input: RecordInput): Record
		deleteRecordById(input: RecordIdInput): String
	}
`;

module.exports = recordSchema;
