const Bovine = require('../schemas/Bovine');
const Record = require('../schemas/Record');

//Resolvers
const bovineResolver = {
	Query: {
		getAllBovine: async () => {
			try {
				const resp = await Bovine.find({}).populate({
					path: 'records.record_id',
					select: 'id event_date temperature heart_rate breathing_rate creat_at'
				});
				return resp;
			} catch (e) {
				console.error(e);
			}
		},
		getBovineById: async (_, { id }) => {
			const bovine = await Bovine.findById(id).populate({
				path: 'records.record_id',
				select: 'id event_date temperature heart_rate breathing_rate create_at'
			});
			return bovine;
		}
	},
	Mutation: {
		newBovine: async (_, { input }) => {
			const bovineExists = await Bovine.findOne({ _id: input.id });
			console.log(bovineExists);
			if (bovineExists) {
				throw new Error('Ya existe el bovino');
			}
			try {
				const bovineInsert = new Bovine(input);
				await bovineInsert.save();

				return bovineInsert;
			} catch (error) {
				console.log(error);
			}
			return 'Creando...';
		},
		deleteBovineById: async (_, { input }) => {
			try {
				const { id } = input;
				let bovineExist = await Bovine.findById(id);
				if (!bovineExist) {
					throw new Error('No existe el bovino');
				}
				await bovineExist.remove(input);
				await bovineExist.save();
				return 'Bovino eliminado';
			} catch (error) {
				console.log(error);
			}
			return 'Bovino eliminado';
		},
		updateBovineById: async (_, { input }) => {
			try {
				const { id, state } = input;
				let bovinoExist = await Bovine.findById({ id: id });
				if (!bovinoExist) {
					throw new Error('No existe el bovino');
				}
				bovinoExist.state = state;
				await bovinoExist.save();
				return bovinoExist;
			} catch (error) {
				console.log(error);
			}
			return bovinoExist;
		},
		newRecordOnBovineById: async (_, { input }) => {
			try {
				const {
					bovine_id,
					records: { newrecord }
				} = input;
				const bovineExist = await Bovine.findById(bovine_id).populate({
					path: 'records.record_id',
					select:
						'id event_date temperature heart_rate breathing_rate create_at'
				});
				if (!bovineExist) {
					throw new Error('El bovino no existe');
				}
				const recordInsert = new Record({
					event_date: newrecord.event_date,
					temperature: newrecord.temperature,
					heart_rate: newrecord.heart_rate,
					breathing_rate: newrecord.breathing_rate
				});
				await recordInsert.save();
				let bovineRecord = await Record.findById({ _id: recordInsert._id });
				await bovineExist.records.push({
					record_id: bovineRecord,
					id: recordInsert._id
				});
				await bovineExist.save();
				return bovineExist;
			} catch (error) {
				console.log(error);
			}
		},
		updateTreatmentBovineById: async (_, { input }) => {
			try {
				const {
					id_bovine,
					records: { id, treatment }
				} = input;
				const bovineExist = await Bovine.findById(id_bovine).populate({
					path: 'records.record_id',
					select:
						'id event_date temperature heart_rate breathing_rate create_at'
				});
				if (!bovineExist) {
					throw new Error('El bovino no existe');
				}
				const treatold = await bovineExist.records.filter(
					(record) => record.id === id
				)[0];
				console.log(treatold);
				if (!treatold) {
					throw new Error('El tratamiento no existe');
				}
				treatold.treatment = treatment;
				await bovineExist.save();
				return bovineExist;
			} catch (error) {
				console.log(error);
			}
		}
	}
};

module.exports = bovineResolver;
