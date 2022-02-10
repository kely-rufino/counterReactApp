
import {useState} from "react";

export const Form =() => {
    const [inputValue,setValue] = useState('')
    return(
        <div>
            <input onChange={(e) =>{
                setValue(e.target.value)
            }}/>
            <button onClick={() => {
                console.log(inputValue)
            }}>Display </button>
        </div>
        )
}
