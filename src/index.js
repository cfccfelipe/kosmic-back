const { ApolloServer } = require('apollo-server');
const userSchema = require('./schemas/userSchema');
const userResolver = require('./resolvers/userResolver');
const connectDb = require('./config/db');
const vetResolver = require('./resolvers/vetResolver');
const vetSchema = require('./schemas/vetSchema');

//Connect Db
connectDb();

//Import schemas and resolvers
const typeDefs = [userSchema, vetSchema];
const resolvers = [userResolver, vetResolver];

//Server with ApolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers
});

//Run Server
server.listen().then(({ url }) => {
	console.log(`Run server on URL ${url}`);
});
