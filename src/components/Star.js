import React from 'react'
import { FaStar } from 'react-icons/fa'

const Star = ({
	selected = false,
	onSelect = (f) => f,
	onDoubleClick = (f) => f,
}) => (
	<FaStar
		color={selected ? 'red' : 'grey'}
		onClick={onSelect}
		onDoubleClick={onDoubleClick}
	/>
)

export default Star
