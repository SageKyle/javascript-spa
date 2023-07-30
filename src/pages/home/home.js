import productList from '../../components/product-list.js'
import productNav from '../../components/product-nav.js'

export default async function home(category) {
	let selectedCategory = category === '' ? '' : '/category/' + category
	const prodNav = await productNav()
	const allProducts = await productList(selectedCategory)

	const template = document.createElement('template')

	template.innerHTML = `<section>
    <nav>    
    ${prodNav}
    </nav>
    ${allProducts}
</section>
`

	class Home extends HTMLElement {
		constructor() {
			super()
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.appendChild(template.content.cloneNode(true))
			document.title = 'Home page'
		}

		connectedCallback() {
			this.shadowRoot
				.querySelector('.cat-nav')
				.addEventListener('click', (e) => {
					if (e.target.classList.contains('category')) {
						selectedCategory = '/category/' + encodeURI(e.target.textContent)
						console.log(selectedCategory)
					}
				})
		}
	}

	if (!customElements.get('products-list')) {
		customElements.define('products-list', Home)
	}
	console.log('loaded')
	return `<products-list>
    </-page>`
}
