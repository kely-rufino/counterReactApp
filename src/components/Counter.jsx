import {useState} from "react";
import {Button} from "./Button";

function Counter(){
    const [value, updateValue] = useState(0)
    function addOne(){
       updateValue(value +1)
    }
    function lessOne(){
        updateValue(value-1)
    }

    return(
        <div>
            <h1>{value}</h1>
            <Button clickHandler={() => {
                updateValue(value + 1)
            }}>+</Button>
            <Button clickHandler={() => {
                updateValue(value - 1)
            }}>-</Button>
        </div>
    )
}
export default Counter;

}