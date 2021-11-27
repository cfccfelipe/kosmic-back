const { ApolloServer } = require('apollo-server');

const vetResolver = require('./resolvers/vetResolver');
const vetSchema = require('./types/vetSchema');
const recordSchema = require('./types/recordSchema');
const recordResolver = require('./resolvers/recordResolver');
const bovineSchema = require('./types/bovineSchema');
const bovineResolver = require('./resolvers/bovineResolver');
const managerSchema = require('./types/managerSchema');
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
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`Run server on URL ${url}`);
});
