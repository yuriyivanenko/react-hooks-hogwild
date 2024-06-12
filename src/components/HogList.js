import React, { useState } from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
	const [showGreased, setShowGreased] = useState(false)
	
	const handleFilterGreased = () => setShowGreased(showGreased => !showGreased)

	const filteredList = showGreased ? hogs.filter(hog => hog.greased) : hogs
	
	return (
		<>
			<div>
			<button onClick={handleFilterGreased}>Filter Greased Hogs</button>
			</div>
			<div className="ui grid container">
				<div className="ui eight wide column">
					{filteredList.map(hog => {
						return <HogTile key={hog.name} hog={hog} />
					})}
				</div>
		</div>
		</>
	)
}

export default HogList;
