import routes from './api/routes.js'
import navbar from './components/navbar.js'

// Main container
const main = document.querySelector('.root')
// append the navbar to the html
document.querySelector('nav').innerHTML = navbar()
// switch route without reloading the page (default behaviour of links)
function route(event) {
	event = event || window.event
	event.preventDefault()
	window.history.pushState({}, '', event.target.href)

	handleLocation()
}
// check if the current path (url) is part of the preconfigured routes, else display the 404 page
async function handleLocation() {
	const path = window.location.search
	const templateFunc = routes[path] || routes[404]
	const html = await templateFunc()

	main.innerHTML = html
}
// make route() a method on the window object
window.route = route
// when user clicks back/forward, trigger the location function
window.onpopstate = handleLocation
// call the location function on first page load
handleLocation()
// export the function so it can be used within custom elements
export { route }
