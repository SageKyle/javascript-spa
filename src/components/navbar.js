const html = `
<button class="home nav-btn"><a href="/" onclick="route()">Home</a></button>
<button class="about nav-btn">
    <a href="/?about" onclick="route()">About</a>
</button>
<button class="test nav-btn"><a href="/?home" onclick="route()">Test Page</a></button>
`

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
