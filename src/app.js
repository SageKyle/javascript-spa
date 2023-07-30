import routes from './api/routes.js'
import navbar from './components/navbar.js'

const main = document.querySelector('.root')

document.querySelector('nav').innerHTML = navbar()

function route(event) {
	event = event || window.event
	event.preventDefault()
	window.history.pushState({}, '', event.target.href)

	handleLocation()
}

async function handleLocation() {
	const path = window.location.search
	const html = routes[path] || routes[404]

	main.innerHTML = html
}

window.route = route
// window.handleLocation = handleLocation
window.onpopstate = handleLocation
handleLocation()
export { route }
