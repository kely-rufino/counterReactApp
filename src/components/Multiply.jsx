import {useState} from "react";

function Multiply() {
    const [value, updateValue] = useState(1)

    function multiplyByThree() {
        updateValue(value * 3)
    }

    return (
        <div>
            <input type="text" value={value}/>
            <button onClick={multiplyByThree}> x</button>
        </div>
    );
}

export default Multiply;
