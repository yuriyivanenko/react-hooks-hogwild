import React from "react";

const HogTile = ({ hogs }) => {
	return (
		<div className="ui grid container">
				<div className="ui eight wide column">
					{hogs.map(hog => {
						return (
							<div key={hog.name} className="pigTile">
								<p className="hoggyText">{hog.name}</p>
								<img style={{width: '500px'}} src={hog.image}/>
							</div>
						)
					})}
				</div>
			</div>
	)
}

export default HogTile;
