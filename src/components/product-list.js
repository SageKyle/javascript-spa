import { baseURL } from '../api/global.js'
import productListStyles from '../assets/stylesheets/product-list-styles.js'

export default async function productList(selectedCategory) {
	try {
		const json = await fetch(encodeURI(baseURL + selectedCategory))

		if (!json.ok) {
			throw new Error(
				'Something went wrong... Check your network and try again'
			)
		}

		const products = await json.json()

		return `${productListStyles}
        <ul class="container">
                ${products
									?.map(
										(product) => `<li class='card'>
                    <img src=${product.image} alt='product image' class='card__img'>
                    <h4 class='card__heading' title=${product.title}>${product.title}</h4>
                </li>`
									)
									.join('')}
                
            </ul>`
	} catch (error) {
		console.error(error)
		return `<p>${error.message}... check your network and try refreshing the page</p>`
	}
}
