import React from "react";

function HogFilter({onFilterClick}) {
    
    return (
        <div className="filter">
            <h3>Filter Hogs</h3>
            <button name="all" onClick={onFilterClick}>Greased and Ungreased Hogs</button>
            <button name="greased" onClick={onFilterClick}>Greased Hogs Only</button>
        </div>
    )
}

export default HogFilter