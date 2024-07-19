const typeDefs = `#graphql
	type Query  {
		Meal(id: String!): Meal!
		Meals: [Meal!]!
	}

	type Meal  {
		id: ID!,
		category: String!,
		name: String!,
		tribe: String!, 
		rating: Float! 
	}

	type Mutation  {
		createMeal(params: createUserParams!): Meal!, 
		updateMeal(id:String , params: createUserParams ): Meal,	
	}

	input createUserParams {	
		category: String!,
		name: String!,
		tribe: String!, 
		rating: Float! 
	}
	
`

export default typeDefs
