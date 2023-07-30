const template = (document.createElement(
	'template'
).innerHTML = `<article class="auth">
    <form></form>

</article>`)

const main = document.querySelector('.root')

let routes = {},
	templates = {}

function home() {
	main.innerHTML = `<h2>This is Home</h2>
<button class="home-btn"><a href="/home">Home</a></button>
<button class="about-btn"><a href="/about">About</a></button>
<test-tag></test-tag>`
}

function about() {
	main.innerHTML = `<h2>This is About page
<button class="home-btn"><a href="/home">Home</a></button>
		<button class="about-btn"><a href="/about">About</a></button>
</h2><test-tag></test-tag>`
}

function route(path, template) {
	if (typeof template === 'function') {
		return (routes[path] = template)
	} else if (typeof template === 'string') {
		return (routes[path] = templates[template])
	} else {
		return
	}
}

function template(name, templateFunction) {
	return (templates[name] = templateFunction)
}

template('home', () => home())
template('about', () => about())

route('/home', 'home')
route('/about', 'about')

function resolveRoute(route) {
	try {
		return routes[route]
	} catch (e) {
		throw new Error(`Route '${route}' not found`)
	}
}

function router() {
	const url = window.location.pathname
	const route = resolveRoute(url)

	main.append(route)
}

window.addEventListener('load', router)
