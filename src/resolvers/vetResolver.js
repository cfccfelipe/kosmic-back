const Vet = require('../schemas/Vet');

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
			const vetExists = await Vet.findOne({ email: input.email });
			if (vetExists) {
				throw new Error('Veterinario existe');
			}
			try {
				const vetInsert = new Vet(input);
				await vetInsert.save();

				return vetInsert;
			} catch (error) {
				console.log(error);
			}
			return 'Creando...';
		},
		deleteVetById: async (_, { input }) => {
			try {
				const { id } = input;
				let vetExist = await Vet.findById(id);
				if (!vetExist) {
					throw new Error('No existe el veterinario');
				}
				await vetExist.remove(input);
				await vetExist.save();
				return 'Veterinario eliminado';
			} catch (error) {
				console.log(error);
			}
			return 'Reporte eliminado';
		},
		updateVetById: async (_, { input }) => {
			try {
				const { id, email, phone } = input;
				let vetExist = await Vet.findById(id);
				if (!vetExist) {
					throw new Error('No existe el veterinario');
				}
				if (phone) {
					vetExist.phone = phone;
				}
				if (email) {
					vetExist.email = email;
				}
				await vetExist.save();
				return vetExist;
			} catch (error) {
				console.log(error);
			}
			return vetExist;
		}
	}
};

module.exports = vetResolver;
