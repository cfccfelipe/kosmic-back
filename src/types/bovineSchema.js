const { gql } = require('apollo-server');

//Schemas
const bovineSchema = gql`
	type Bovine {
		id: ID
		name: String
		birth: String
		state: String
		records: [Records]
		create_at: String
	}
	type Records {
		id: ID
		record_id: Record
		treatment: String
	}
	type Record {
		id: ID
		event_date: String
		temperature: Float
		heart_rate: Float
		breathing_rate: Float
		create_at: String
	}

	#Inputs
	input BovineInput {
		name: String
		birth: String
	}

	input BovineIdInput {
		id: ID!
	}

	input BovineUpdateByIdInput {
		id: ID!
		state: String!
	}
	input TreatmentUpdate {
		id_bovine: ID!
		records: RecordUpdateInput
	}
	input RecordUpdateInput {
		id: ID!
		treatment: String!
	}
	input NewRecordOnBovineInputById {
		bovine_id: ID
		records: RecordInputID
	}
	input RecordInputID {
		newrecord: RecordInput
		treatment: String
	}
	input RecordInput {
		event_date: String!
		temperature: Float!
		heart_rate: Float!
		breathing_rate: Float!
	}

	#Querys and mutation
	type Query {
		getAllBovine: [Bovine]
		getBovineById(id: String!): Bovine
	}
	type Mutation {
		newBovine(input: BovineInput): Bovine
		deleteBovineById(input: BovineIdInput): String
		updateBovineById(input: BovineUpdateByIdInput): Bovine
		newRecordOnBovineById(input: NewRecordOnBovineInputById): Bovine
		updateTreatmentBovineById(input: TreatmentUpdate): Bovine
	}
`;

module.exports = bovineSchema;
