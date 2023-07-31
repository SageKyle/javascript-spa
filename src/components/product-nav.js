import { getCategories } from '../api/global.js'
import { route } from '../app.js'

function createListItems(array, ...CSSclasses) {
	return array
		?.map(
			(item) =>
				`<li class=${CSSclasses}><a class="category" href=/?category=${encodeURI(
					item
				)} onclick=${route}>${item}</a></li>`
		)
		.join('')
}

export default async function productNav() {
	try {
		const categories = await getCategories()

		return `<style>
					
			.cat-nav {
				display: flex;
				align-items: center;
				gap: 1rem;
				margin-inline: auto 4rem;
				margin-block: 4rem;
			}

			.cat-nav__item {
				list-style: none;
				text-transform: capitalize;
				font-size: 1.8rem;
				cursor: pointer;
				transition: all ease-in-out .2s;
			}

			.cat-nav__item:hover {
				color: dodgerblue;

			}
			
			.active {
				color: dodgerblue;
			}
        </style>
        <ul class="cat-nav">
				<li class='cat-nav__item active'><a class="category" href='/' onclick=${route}>All</a></li>
                ${createListItems(categories, 'cat-nav__item')}
            </ul>`
	} catch (error) {
		console.error(error)
		return ''
	}
}
