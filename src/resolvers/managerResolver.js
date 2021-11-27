const Bovine = require('../entities/Bovine');
const Manager = require('../entities/Manager');
const Vet = require('../entities/Vet');

//Resolvers
const managerResolver = {
	Query: {
		getAllManagers: async () => {
			try {
				const resp = await Manager.find({}).populate({
					path: 'bovines.bovine_id vets.vet_id',
					select: 'id name state birth fullname email phone clinic'
				});
				return resp;
			} catch (e) {
				console.error(e);
			}
		},
		getManagerById: async (_, { id }) => {
			const manager = await Manager.findById(id).populate({
				path: 'bovines.bovine_id vets.vet_id',
				select: 'id name state birth fullname email phone clinic'
			});
			return manager;
		}
	},
	Mutation: {
		newManager: async (_, { input }) => {
			const managerExists = await Manager.findOne({ id: input.id });
			console.log(managerExists);
			if (managerExists) {
				throw new Error('Ya existe el gestor');
			}
			try {
				const managerInsert = new Manager(input);
				await managerInsert.save();

				return managerInsert;
			} catch (error) {
				console.log(error);
			}
			return 'Creando...';
		},
		deleteManagerById: async (_, { input }) => {
			try {
				const { id } = input;
				let managerExist = await Manager.findById(id);
				if (!managerExist) {
					throw new Error('No existe el Gestor');
				}
				await managerExist.remove(input);
				await managerExist.save();
				return 'Gestor eliminado';
			} catch (error) {
				console.log(error);
			}
			return 'Gestor eliminado';
		},
		updateManagerById: async (_, { input }) => {
			try {
				const { position, phone, email } = input;
				let managerExist = await Manager.findById(id);
				if (!bovinoExist) {
					throw new Error('No existe el gestor');
				}
				if (position) {
					managerExist.position = position;
				}
				if (phone) {
					managerExist.phone = phone;
				}
				if (email) {
					managerExist.email = email;
				}
				await managerExist.save();
				return managerExist;
			} catch (error) {
				console.log(error);
			}
			return managerExist;
		},
		newVetOnManagerById: async (_, { input }) => {
			try {
				const { manager_id, vet_id } = input;
				const managerExist = await Manager.findById(manager_id).populate({
					path: 'vets.vet_id',
					select: 'id fullname email phone clinic create_at'
				});
				if (!managerExist) {
					throw new Error('El manager no existe');
				}
				let vet = await Vet.findById(vet_id);
				console.log(vet);
				if (managerExist.vets.find((vet) => vet.vet_id._id == vet_id)) {
					throw new Error('El veterinario ya fue asignado a el gestor');
				}

				await managerExist.vets.push({
					vet_id: vet,
					_id: vet._id
				});
				await managerExist.save();
				return managerExist;
			} catch (error) {
				console.log(error);
			}
		},
		newBovineOnManagerById: async (_, { input }) => {
			try {
				const { manager_id, bovine_id } = input;
				const managerExist = await Manager.findById(manager_id).populate({
					path: 'bovines.bovine_id',
					select: '_id name birth state create_at'
				});
				if (!managerExist) {
					throw new Error('El manager no existe');
				}
				let bovine = await Bovine.findById(bovine_id).populate({
					path: 'records.record_id',
					select:
						'id event_date temperature heart_rate breathing_rate create_at'
				});

				if (managerExist.bovines.find((bovine) => bovine.id == bovine_id)) {
					throw new Error('El bovino ya fue asignado a el gestor');
				}

				await managerExist.bovines.push({
					bovine_id: bovine,
					_id: bovine.id
				});
				await managerExist.save();
				return managerExist;
			} catch (error) {
				console.log(error);
			}
		}
	}
};

module.exports = managerResolver;
