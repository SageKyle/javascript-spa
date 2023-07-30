const html = `
<button class="home"><a href="/?home" onclick="route()">Home</a></button>
<button class="main"><a href="/" onclick="route()">Main Page</a></button>
<button class="about-btn">
    <a href="/?about" onclick="route()">About</a>
</button>`

class navBar extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = html
	}
}

customElements.define('nav-bar', navBar)

export default function navbar() {
	return `<nav-bar></nav-bar>`
}
