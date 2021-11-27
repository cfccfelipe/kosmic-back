const { gql } = require('apollo-server');

//Schemas
const managerSchema = gql`
	type Manager {
		_id: ID
		id: String
		name: String
		email: String
		phone: Float
		position: String
		bovines: [Bovines]
		vets: [Vets]
		create_at: String
	}
	type Bovines {
		_id: ID
		bovine_id: Bovine
	}
	type Vets {
		_id: ID
		vet_id: Vet
	}
	type Bovine {
		id: ID
		name: String
		birth: String
		state: String
		create_at: String
	}
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
	input ManagerInput {
		_id: ID
		id: String
		name: String
		email: String
		phone: Float
		position: String
	}

	input ManagerIdInput {
		id: ID!
	}

	input ManagerUpdateByIdInput {
		id: ID!
		position: String
		phone: String
		email: String
	}

	input NewVetOnManagerInputById {
		manager_id: ID
		vet_id: ID
	}

	input NewBovineOnManagerInputById {
		manager_id: ID
		bovine_id: ID
	}

	#Querys and mutation
	type Query {
		getAllManagers: [Manager]
		getManagerById(id: String!): Manager
	}
	type Mutation {
		newManager(input: ManagerInput): Manager
		deleteManagerById(input: ManagerIdInput): String
		updateManagerById(input: ManagerUpdateByIdInput): Manager
		newVetOnManagerById(input: NewVetOnManagerInputById): Manager
		newBovineOnManagerById(input: NewBovineOnManagerInputById): Bovine
	}
`;

module.exports = managerSchema;
