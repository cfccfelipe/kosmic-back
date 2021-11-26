const { gql } = require('apollo-server');

//Schemas
const managerSchema = gql`
	type Bovine {
		id: ID
		name: String
		email: String
		phone: Float
		poisiton: String
		bovines: [Bovines]
		vets: [Vets]
		create_at: String
	}
	type Bovines {
		id: ID
		name: String
		birth: String
		state: String
		create_at: String
	}
	type Vets {
		_id: ID
		id: String
		fullname: String
		email: String
		phone: Float
		clinic: String
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

module.exports = managerSchema;
