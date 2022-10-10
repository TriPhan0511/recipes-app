import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Menu from './components/Menu'
import data from './data/recipes.json'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Menu recipes={data} />
		{/* <Menu title='Cooking Recipes' recipes={data} /> */}
	</React.StrictMode>
)

reportWebVitals()
