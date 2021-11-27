const Record = require('../schemas/Record');

//Resolvers
const recordResolver = {
	Query: {
		getAllRecords: async () => {
			try {
				const resp = await Record.find();
				return resp;
			} catch (e) {
				console.error(e);
			}
		},
		getRecordById: async (_, { id }) => {
			const record = await Record.findById(id);
			return record;
		}
	},
	Mutation: {
		newRecord: async (_, { input }) => {
			const recordExists = await Record.findOne(input);
			if (recordExists) {
				throw new Error('Ya existe el reporte');
			}
			try {
				const recordInsert = new Record(input);
				await recordInsert.save();

				return recordInsert;
			} catch (error) {
				console.log(error);
			}
			return 'Creando...';
		},
		deleteRecordById: async (_, { input }) => {
			try {
				const { id } = input;
				let recordExist = await Record.findById(id);
				if (!recordExist) {
					throw new Error('No existe el reporte');
				}
				await recordExist.remove(input);
				await recordExist.save();
				return 'Reporte eliminado';
			} catch (error) {
				console.log(error);
			}
			return 'Reporte eliminado';
		}
	}
};

module.exports = recordResolver;
