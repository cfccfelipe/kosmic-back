const { ApolloServer } = require('apollo-server');
const vetResolver = require('./src/resolvers/vetResolver');
const vetSchema = require('./src/schemas/vetSchema');
const recordSchema = require('./src/schemas/recordSchema');
const recordResolver = require('./src/resolvers/recordResolver');
const bovineSchema = require('./src/schemas/bovineSchema');
const bovineResolver = require('./src/resolvers/bovineResolver');
const managerSchema = require('./src/schemas/managerSchema');
const managerResolver = require('./src/resolvers/managerResolver');

const connectDb = require('./src/config/db');

//Connect Db
connectDb();

//Import schemas and resolvers
const typeDefs = [vetSchema, recordSchema, bovineSchema, managerSchema];
const resolvers = [
	vetResolver,
	recordResolver,
	bovineResolver,
	managerResolver
];

//Server with ApolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers
});

//Run Server
server.listen().then(({ url }) => {
	console.log(`Run server on URL ${url}`);
});
