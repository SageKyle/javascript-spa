const baseURL = 'https://fakestoreapi.com/products'

// return an array of product categories
async function getCategories() {
	let categories

	try {
		const json = await fetch(baseURL + '/categories')

		if (!json.ok) {
			throw new Error(
				'Something went wrong... Check your network and try again'
			)
		}
		categories = json.json()
	} catch (error) {
		console.error(error)
		categories = []
	}

	return categories
}

export { baseURL, getCategories }
