import React, { useState } from 'react'
import Star from './Star'

const createArray = (length) => [...Array(length)]

function StarRating({ totalStars = 5 }) {
	const [selectedStars, setSelectedStar] = useState(0)
	return (
		<>
			{createArray(totalStars).map((n, i) => (
				<Star
					key={i}
					selected={selectedStars > i}
					onSelect={() => setSelectedStar(i + 1)}
				/>
			))}
			<p>
				{selectedStars} of {totalStars} stars
			</p>
		</>
	)
}

export default StarRating
