import React from 'react'
import Recipe from './Recipe'
import StarRating from './StarRating'

function App() {
	return (
		<StarRating
			style={{ backgroundColor: 'lightblue' }}
			onDoubleClick={(e) => alert('double click')}
		/>
	)
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

export default App
