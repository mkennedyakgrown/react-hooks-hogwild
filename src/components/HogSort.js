import React from "react";

function HogSort({setSortCategory}) {
    return (
        <div className="sort">
            <h3>Sort Hogs</h3>
            <button name="name" onClick={event => setSortCategory(event.target.name)}>By Name</button>
            <button name="weight" onClick={event => setSortCategory(event.target.name)}>By Weight</button>
            <button name="unsort" onClick={event => setSortCategory(event.target.name)}>Unsort Hogs</button>
        </div>
    )
};

export default HogSort;