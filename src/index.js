const { ApolloServer } = require('apollo-server');
const vetResolver = require('./resolvers/vetResolver');
const vetSchema = require('./schemas/vetSchema');
const recordSchema = require('./schemas/recordSchema');
const recordResolver = require('./resolvers/recordResolver');
const bovineSchema = require('./schemas/bovineSchema');
const bovineResolver = require('./resolvers/bovineResolver');
const managerSchema = require('./schemas/managerSchema');
const managerResolver = require('./resolvers/managerResolver');

const connectDb = require('./config/db');

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
