import React, { useState } from "react";

const HogTile = ({ hog }) => {
	const [showDetails, setShowDetails] = useState(false)
	const handleShowDetails = () => setShowDetails(!showDetails)	
	
	return (
		<div key={hog.name} className="pigTile" onClick={handleShowDetails}>
			<p className="hoggyText">{hog.name}</p>
			{showDetails ? 
				<>
					<p>{hog.specialty}</p>
					<p>{hog.weight}</p> 
					<p>{hog.greased ? 'Greased' : 'Not Greased'}</p> 
					<p>{hog["highest medal achieved"]}</p>
				</>  
			: null}
			<img style={{width: '500px'}} src={hog.image}/>
		</div>
	)
}

export default HogTile;
