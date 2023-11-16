import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogFilter from "./HogFilter";
import HogSort from  "./HogSort";

import hogs from "../porkers_data";
import NewHogForm from "./NewHogForm";

function App() {
    const [displayHogs, setDisplayHogs] = useState(hogs);
	const [isFiltered, setFilter] = useState(false);
    const [hiddenHogs, setHiddenHogs] = useState([]);
	const [sortCategory, setSortCategory] = useState("unsort");
	

	function handleFilterClick(event) {
		setFilter(event.target.name === "greased");
	};

	function handleShowHogs() {
		setHiddenHogs([]);
	}

	function handleSubmitNewHog(newHog) {
		setDisplayHogs([...displayHogs, newHog]);
	}

	return (
		<div className="App">
			<Nav />
			<NewHogForm {...{ handleSubmitNewHog, hogs }}/>
			<HogFilter onFilterClick={handleFilterClick} />
			<HogSort {...{ setSortCategory }} />
			<button onClick={handleShowHogs}>"Unhide All Hogs!"</button>
			<HogList {...{
				displayHogs, hogs, isFiltered, hiddenHogs, setHiddenHogs, sortCategory
			}}/>
		</div>
	);
}

export default App;
