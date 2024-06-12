import React, { useState } from "react";
import SortDropdown from "./SortDropdown";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
	const [showGreased, setShowGreased] = useState(false)
	const [sortValue, setSortValue] = useState('')
	
	const handleFilterGreased = () => setShowGreased(showGreased => !showGreased)
	const handleSort = (sortValue) => setSortValue(sortValue)

	const sortedList = [...hogs].sort((a, b) => {
		if(sortValue === 'name'){
			return a.name.localeCompare(b.name)
		} else if(sortValue === 'weight') {
			return a.weight - b.weight
		}
	})
	const filteredList = showGreased ? sortedList.filter(hog => hog.greased) : sortedList
	
	return (
		<>
			<div>
				<button onClick={handleFilterGreased}>Filter Greased Hogs</button>
			</div>
			<SortDropdown handleSort={handleSort} />
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
