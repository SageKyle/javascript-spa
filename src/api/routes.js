import home from '../pages/home/home.js'
import product from '../pages/products/product.js'
import { getCategories } from './global.js'

// all available routes
const routes = {
	'?about': `<h2>This is About page</h2>`,
	'?home': product(),
	'': await home(''),

	404: `<h4>Oops... Something went wrong!</h4><p>Try refreshing the page</p>`,
}
// get product categories array defined in global.js
const categories = await getCategories()
// create a route for each category
categories?.forEach((category) => {
	createRoute(`/?category=${encodeURI(category)}`, home(category))
})

// programmatically create a new route and append it to the routes object
async function createRoute(path, template) {
	routes[path] = await template
}

export default routes
export { createRoute }

// previous(intended) categories routes structure 👇🏿
// '?category=eletronics': await home('electronics'),
// 	'?category=jewelery': await home('jewelery'),
// 	'?category=men%clothing': await home("men's clothing"),
// 	'?category=women%clothing': await home("women's clothing"),
