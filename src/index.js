const { ApolloServer } = require('apollo-server');
const userSchema = require('./schemas/userSchema');
const userResolver = require('./resolvers/userResolver');
const connectDb = require('./config/db');

//Connect Db
connectDb();

//Import schemas and resolvers
const typeDefs = userSchema;
const resolvers = userResolver;

//Server with ApolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers
});

//Run Server
server.listen().then(({ url }) => {
	console.log(`Run server on URL ${url}`);
});
