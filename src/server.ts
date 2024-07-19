import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "../resolvers/recipe.resolver";
import typeDefs from "../types/typesDef";
import { meals } from "../data/data";

async function context() {
	return { meals }
}

try {
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
	})
	startStandaloneServer(apolloServer, {
		context,
	}
	).then(url => {
		console.log("Server Listening at ", url)
	})
} catch (err) {
	console.log(err)
}