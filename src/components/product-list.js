import { baseURL } from '../api/global.js'

export default async function productList(selectedCategory) {
	try {
		const json = await fetch(encodeURI(baseURL + selectedCategory))

		if (!json.ok) {
			throw new Error(
				'Something went wrong... Check your network and try again'
			)
		}

		const products = await json.json()

		return `<style>
        
					
			.container {
				display: grid;
                grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
                padding: 4rem
                width: 100%;
				align-items: center;
				gap: 4rem;
				margin-inline: auto 4rem;
				margin-block: 4rem;
			}

			.card {
				list-style: none;
				height: 25rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
				color: dodgerblue;
                border: 2px solid #ccc;
                padding: 2rem;
                border-radius: 1rem;
				font-size: 1.8rem;
                width: inherit;
			}

            .card__img {
                width: 100%;
                height: 18rem;
                object-fit: contain;
            }

            .card__heading {
                text-transform: capitalize;
                margin-block: 0;
                overflow: hidden; 
                text-overflow: ellipsis; 
                display: -webkit-box; 
                -webkit-line-clamp: 2; 
                -webkit-box-orient: vertical;
            }
        </style>
        <ul class="container">
                ${products
									?.map(
										(product) => `<li class='card'>
                    <img src=${product.image} alt='product image' class='card__img'>
                    <h4 class='card__heading' title=${product.title}>${product.title}</h4>
                </li>`
									)
									.join('')}
            </ul>`
	} catch (error) {
		console.error(error)
		return `<p>${error.message}... check your network and try refreshing the page</p>`
	}
}
