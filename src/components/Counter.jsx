import {useState} from "react";
import { Button } from "./Button";


function Counter(){
   const [value, updateValue] = useState(0)
    return(
        <div>
            <h1>{value}</h1>
            <Button clickHandler={() => {
                updateValue(value + 1)
            }} text = "+"/>
            <Button clickHandler={() => {
                updateValue(value - 1)
            }} text = "-"/>
        </div>
    )
}
export default Counter;