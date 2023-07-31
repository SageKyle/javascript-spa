import productList from '../../components/product-list.js'
import productNav from '../../components/product-nav.js'

async function getData(selectedCategory) {
	const prodNav = await productNav()
	const allProducts = await productList(selectedCategory)

	return { prodNav, allProducts }
}

export default async function home(category) {
	// if category is an empty string, set selectedCategory to same, else set it to a url
	let selectedCategory = category === '' ? '' : '/category/' + category

	const { prodNav, allProducts } = await getData(selectedCategory)

	const template = document.createElement('template')
	template.innerHTML = `<section>
    <nav>    
    ${prodNav}
    </nav>
    ${allProducts}
	</section>`

	class Home extends HTMLElement {
		constructor() {
			super()
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.appendChild(template.content.cloneNode(true))
			document.title = 'Products home page'
		}

		connectedCallback() {
			// this.shadowRoot
			// 	.querySelector('.cat-nav')
			// 	.addEventListener('click', (e) => {
			// 		// check if user clicked on a category
			// 		if (e.target.classList.contains('category')) {
			// 			// set selectedCategory to that current category
			// 			selectedCategory = '/category/' + encodeURI(e.target.textContent)
			// 			// recall the component (to re-render the current page)
			// 			home()
			// 		}
			// 	})
		}
	}
	// create the custom element if it hasn't been created => due to recursion (connectedCallback event)
	if (!customElements.get('products-list')) {
		customElements.define('products-list', Home)
	}

	return `<products-list></products-list>`
}
