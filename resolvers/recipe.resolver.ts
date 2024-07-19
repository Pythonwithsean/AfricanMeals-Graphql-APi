import { v4 as uuid } from "uuid"

const resolvers = {

	Query: {
		Meal: (parent: any, { id }: any, { meals }: any) => meals.find((meal: any) => meal.id == id),
		Meals: (parent: any, args: any, { meals }: any) => meals,
	},

	Mutation: {
		createMeal: (parent: any, { params }: any, { meals }: any) => {
			const { name, category, tribe, rating } = params
			const newMeal = {
				id: uuid(),
				name,
				category,
				tribe,
				rating
			}
			meals.push(newMeal)
			console.log(newMeal)
			return newMeal
		},
		updateMeal: (parent: any, args: any, { meals }: any) => {
			const { id, params } = args
			const { name, category, tribe, rating } = params
			const updatedMeal = meals.find((meal: any) => meal.id == id)
			Object.assign(updatedMeal, {
				name,
				category,
				tribe,
				rating
			})
			return updatedMeal
		}
	}
}

export default resolvers