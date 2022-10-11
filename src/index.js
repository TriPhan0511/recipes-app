import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import data from './data/recipes.json'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App recipes={data} />
	</React.StrictMode>
)

reportWebVitals()
