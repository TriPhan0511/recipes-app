import React from 'react'
import Recipe from './Recipe'
import StarRating from './StarRating'

function Menu() {
	return <StarRating />
}
// function Menu({ recipes }) {
// 	return (
// 		<article>
// 			<header>
// 				<h1>Delicous Recipes</h1>
// 			</header>
// 			<div className='recipes'>
// 				{recipes.map((recipe, i) => (
// 					<Recipe key={i} {...recipe} />
// 				))}
// 			</div>
// 		</article>
// 	)
// }

export default Menu
