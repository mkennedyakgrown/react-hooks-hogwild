import { React, useState } from "react";
import Hog from "./Hog";

function HogList({hogs, isFiltered, hiddenHogs, setHiddenHogs, sortCategory, displayHogs}) {

    function filterHogs() {
        let currDisplayHogs = displayHogs.filter(hog => !hiddenHogs.includes(hog.name));
        
        if (sortCategory === "name") {
                currDisplayHogs = currDisplayHogs.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    } else {
                        return 0;
                    };
                });
        }

        if (sortCategory === "weight") {
            currDisplayHogs = currDisplayHogs.sort((a, b) => a.weight - b.weight);
        }

        if (isFiltered === true) {
            return currDisplayHogs.filter(hog => hog.greased === true);
        } else {
            return currDisplayHogs;
        };
    }

    function handleHideHog(event) {
        if (!hiddenHogs.includes(event.target.name)) {
            setHiddenHogs([...hiddenHogs, event.target.name]);
        };
    }

    return (
        <div className={"ui grid container"}>
            {filterHogs().map(hog => {
                return <Hog {...{hog, handleHideHog}} key={hog.name} />
                })}
        </div>
    )
}

export default HogList;