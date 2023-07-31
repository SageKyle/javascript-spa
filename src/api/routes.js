import about from '../pages/about/about.js'
import error404 from '../pages/error/error-404.js'
import home from '../pages/home/home.js'
import product from '../pages/products/product.js'
import { getCategories } from './global.js'

// all available routes
const routes = {
	'?about': about(),
	'?home': product(),
	'': await home(''),
	'?category=jewelery': await home('jewelery'),
	'?category=electronics': await home('electronics'),
	'?category=men%27s%20clothing': await home("men's clothing"),
	'?category=women%27s%20clothing': await home("women's clothing"),
	404: error404(),
}
// get product categories array defined in global.js
// const categories = await getCategories()
// // create a route for each category
// categories?.forEach((category) => {
// 	createRoute(`/?category=${encodeURI(category)}`, home(`${category}`))
// })

// programmatically create a new route and append it to the routes object
async function createRoute(path, template) {
	routes[path] = await template
}

export default routes
export { createRoute }
