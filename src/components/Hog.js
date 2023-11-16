import { React, useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";

function Hog({ hog, handleHideHog }) {
    function handleClick(event) {
        const content = event.target.parentNode.children.namedItem("hiddenContent");
        content.hidden = !content.hidden;
    }

    return (
        <Card className="ui eight wide column">
            <Image src={hog.image} onClick={handleClick} />
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button content='Hide this Porker' onClick={handleHideHog} name={hog.name} />
            </Card.Content>
            <Card.Content name={"hiddenContent"} hidden={true}>
                <Card.Description>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Greased: {hog.greased? "Yes" : "No" }</p>
                    <p>Weight: {hog.weight} lbs</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default Hog;