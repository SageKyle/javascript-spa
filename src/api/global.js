const baseURL = 'https://fakestoreapi.com/products'

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

function createListItems(array, ...CSSclasses) {
	return array?.map((item) => `<li class=${CSSclasses}>${item}</li>`).join('')
}

export { baseURL, createListItems, getCategories }
