import React, { useState } from 'react'
import Star from './Star'

const createArray = (length) => [...Array(length)]

function StarRating({ style = {}, totalStars = 5, onDoubleClick = (f) => f }) {
	const [selectedStars, setSelectedStar] = useState(0)
	return (
		<div style={{ padding: '5px', ...style }}>
			{createArray(totalStars).map((n, i) => (
				<Star
					key={i}
					selected={selectedStars > i}
					onSelect={() => setSelectedStar(i + 1)}
					onDoubleClick={onDoubleClick}
				/>
			))}
			<p>
				{selectedStars} of {totalStars} stars
			</p>
		</div>
	)
}

export default StarRating
