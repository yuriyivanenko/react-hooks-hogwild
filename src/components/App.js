import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import AddHogForm from "./AddHogForm";

import hogs from "../porkers_data";

function App() {
	const [hogsList, setHogsList] = useState(hogs)
	const handleNewHog = (newHog) => setHogsList([...hogs, newHog])

	return (
		<div className="App">
			<Nav />
			<AddHogForm handleNewHog={handleNewHog} />
			<HogList hogs={hogsList} />
		</div>
	)
}

export default App;
