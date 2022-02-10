import {useState} from "react";
import {Button} from "./Button";

function Person({name}) {

    const [showPerson, hidePerson] = useState(true)
    return (
        <div>
            <Button clickHandler={() => {
                hidePerson(!showPerson)
            }} text="Hide data"/>
            {showPerson && <p>{name}</p>}
        </div>
    )
}

export default Person;

