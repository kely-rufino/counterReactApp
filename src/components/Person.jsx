import {useState} from "react";
import {Button} from "./Button";

function Person() {

    const [showPerson, hidePerson] = useState(true)
    return(
        <div>
            <Button clickHandler={() => {
                hidePerson(!showPerson)
            }}>Hide person</Button>
            {showPerson && <p>Name</p>}
        </div>
    )
}

export default Person;

