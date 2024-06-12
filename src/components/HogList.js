import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs }) => {
	return (
		<div className="ui grid container">
			<div className="ui eight wide column">
				{hogs.map(hog => {
					return <HogTile key={hog.name} hog={hog} />
				})}
			</div>
		</div>
	)
}

export default HogList;
