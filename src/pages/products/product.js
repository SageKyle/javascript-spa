// import img from '../../assets/images/google.png'

const template = document.createElement('template')

template.innerHTML = `
<section>
<h2>This is some heading</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum impedit ea perspiciatis, animi inventore possimus? Nihil placeat maiores illo minus blanditiis odit! Placeat nisi mollitia ea a totam sunt, accusantium animi maiores debitis quo omnis magnam perspiciatis facere? Ut omnis ratione rerum explicabo! Earum autem doloremque optio explicabo deleniti hic totam facere accusantium, praesentium eius! Repellendus quidem unde distinctio?</p>
<img src='./src/assets/images/google.png' alt="img">
<img src='./src/assets/images/profile.png' alt="img">
</section>

`

class Products extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true))
		document.title = 'Products'
	}
}

export default function product() {
	// create the custom element if it hasn't been created => due to recursion (connectedCallback event)
	if (!customElements.get('product-page')) {
		customElements.define('product-page', Products)
	}
	return `<product-page></product-page>`
}
