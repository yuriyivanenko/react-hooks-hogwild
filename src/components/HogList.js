import React, { useState } from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
	const [showGreased, setShowGreased] = useState(false)
	const [hogList, setHogList] = useState(hogs.map(hog => {
		return {
			...hog,
			display: true
		}
	}))
	
	const handleFilterGreased = () => {
		setShowGreased(showGreased => {
			const newState = !showGreased
			if(newState){
				displayGreasedHogs()
			} else {
				displayAllHogs()
			}
			return newState
		})
	}

	const displayAllHogs = () => {
		setHogList(hogList.map(hog => {
			return {
				...hog,
				display: true
			}
		}))
	}

	const displayGreasedHogs = () => {
		setHogList(hogList.map(hog => {
			if(hog.greased === false){
				return {
					...hog,
					display: false
				}
			} else {
				return hog
			}
		}))
	}
	
	return (
		<>
			<div>
			<button onClick={handleFilterGreased}>Filter Greased Hogs</button>
			</div>
			<div className="ui grid container">
				<div className="ui eight wide column">
					{hogList.map(hog => {
						{return hog.display ? <HogTile key={hog.name} hog={hog} /> : null}
					})}
				</div>
		</div>
		</>
	)
}

export default HogList;
