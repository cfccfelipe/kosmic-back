const Vet = require('../entities/Vet');

//Resolvers
const vetResolver = {
	Query: {
		getAllVets: async () => {
			try {
				const resp = await Vet.find();
				return resp;
			} catch (e) {
				console.error(e);
			}
		},
		getVetById: async (_, { id }) => {
			const vet = await Vet.findById(id);
			return vet;
		}
	},
	Mutation: {
		newVet: async (_, { input }) => {
			// const vetExists = await Vet.findOne({ email });
			// if (vetExists) {
			// 	throw new Error('Veterinario existe');
			// }

			try {
				const vetInsert = new Vet(input);
				await vetInsert.save();

				return vetInsert;
			} catch (error) {
				console.log(error);
			}
			return 'Creando...';
		}
	}
};

module.exports = vetResolver;
