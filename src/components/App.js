import React from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogTile hogs={hogs} />
		</div>
	);
}

export default App;
