import React from 'react'
import IngredientList from './IngredientList'
import Instructions from './Instructions'

function Recipe({ name, ingredients, steps }) {
	return (
		<section id={name.toLowerCase().replace(/ /g, '-')}>
			<h1>{name}</h1>
			<IngredientList list={ingredients} />
			<Instructions steps={steps} title='Cooking Instructions' />
		</section>
	)
}

export default Recipe
