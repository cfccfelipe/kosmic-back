const { ApolloServer } = require('apollo-server');
const vetResolver = require('./resolvers/vetResolver');
const vetSchema = require('./schemas/vetSchema');
const connectDb = require('./config/db');

//Connect Db
connectDb();

//Import schemas and resolvers
const typeDefs = vetSchema;
const resolvers = vetResolver;

//Server with ApolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers
});

//Run Server
server.listen().then(({ url }) => {
	console.log(`Run server on URL ${url}`);
});
