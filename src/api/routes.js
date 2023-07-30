import altLogin from '../components/alt-login.js'
import home from '../pages/home/home.js'
import product from '../pages/products/product.js'
import { getCategories } from './global.js'

const routes = {
	'?about': `<h2>This is About page</h2> ${altLogin()}`,
	'?home': product(),
	'': await home(''),

	404: `<h4>Oops... Something went wrong!</h4><p>Try refreshing the page</p>`,
}

const categories = await getCategories()

categories?.forEach((category) => {
	createRoute(`/?category=${encodeURI(category)}`, home(category))
})

console.log(routes)

export default routes
export { createRoute }

async function createRoute(path, template) {
	routes[path] = await template
}

// '?category=eletronics': await home('electronics'),
// 	'?category=jewelery': await home('jewelery'),
// 	'?category=men%clothing': await home("men's clothing"),
// 	'?category=women%clothing': await home("women's clothing"),
