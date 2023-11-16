import { React, useState } from "react";
import { Form, Checkbox, Dropdown, Button } from "semantic-ui-react";

function NewHogForm({handleSubmitNewHog, hogs}) {
    const weightOptions = [];
    const [formName, setFormName] = useState('');
    const [formSpecialtyText, setFormSpecialtyText] = useState('');
    const [formIsGreased, setFormIsGreased] = useState(false);
    const [formWeight, setFormWeight] = useState(0);
    const [formMedal, setFormMedal] = useState("");
    

    const medalOptions = [
        { key: 'bronze', value: 'bronze', text: 'bronze'},
        { key: 'silver', value: 'silver', text: 'silver'},
        { key: 'gold', value: 'gold', text: 'gold'},
        { key: 'platinum', value: 'platinum', text: 'platinum'},
        { key: 'diamond', value: 'diamond', text: 'diamond'},
        { key: 'wood', value: 'wood', text: 'wood'},
        { key: 'unobtanium', value: 'unobtanium', text: 'unobtanium'},
    ];

    function onSubmitNewHog() {
        const newHog = {
            name: formName,
            specialty: formSpecialtyText,
            greased: formIsGreased,
            weight: formWeight,
            "highest medal achieved": formMedal,
            image: hogs[parseInt(Math.random()*10)].image,
        }

        setFormName("");
        setFormSpecialtyText("");
        setFormIsGreased(false);
        setFormWeight(0);
        setFormMedal("");
        
        handleSubmitNewHog(newHog);
    }

    return (
        <Form>
            <Form.Field>
                <label>New Hog Name</label>
                <input
                    placeholder="New Hog Name"
                    onChange={event => setFormName(event.target.value)}
                    value={formName}
                ></input>
            </Form.Field>
            <Form.Field>
                <label>Specialty</label>
                <input
                    placeholder="Write specialty here"
                    onChange={event => setFormSpecialtyText(event.target.value)}
                    value={formSpecialtyText}
                ></input>
            </Form.Field>
            <Form.Field>
                <Checkbox
                    label="Greased"
                    onChange={event => setFormIsGreased(!formIsGreased)}
                    checked={formIsGreased}
                ></Checkbox>
            </Form.Field>
            <Form.Field>
                <input
                    type="number"
                    placeholder="Hog Weight"
                    onChange={event => setFormWeight(parseFloat(event.target.value))}
                    value={formWeight}
                ></input>
            </Form.Field>
            <Form.Field>
                <Dropdown
                    placeholder="Highest Medal Achieved"
                    fluid
                    search
                    selection
                    options={medalOptions}
                    onChange={event => setFormMedal(event.target.innerText)}
                    value={formMedal}
                ></Dropdown>
            </Form.Field>
            <Button type="submit" onClick={onSubmitNewHog}>Submit</Button>
        </Form>
    )
}

export default NewHogForm;