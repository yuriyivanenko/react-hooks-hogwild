import React, { useState } from "react";

const HogTile = ({ hog, handleHideHog }) => {
	const [showDetails, setShowDetails] = useState(false)
	const handleShowDetails = () => setShowDetails(!showDetails)	
	
	return (
		<div key={hog.name} className="pigTile" >
			<p className="hoggyText">{hog.name}</p>
			{showDetails ? 
				<>
					<p>{hog.specialty}</p>
					<p>{hog.weight}</p> 
					<p>{hog.greased ? 'Greased' : 'Not Greased'}</p> 
					<p>{hog["highest medal achieved"]}</p>
				</>  
			: null}
			<img onClick={handleShowDetails} style={{width: '500px'}} src={hog.image}/>
			<button className="ui button" onClick={() => handleHideHog(hog.name)}>Hide This Hog!</button>
		</div>
	)
}

export default HogTile;
