import {useState} from "react";

export const FormInput = () => {
    const [inputValue, setValue] = useState('')
    const [pTagValue, pSetValue] = useState('')
    return (
        <div>
            {
                pSetValue(inputValue)
            }

            <input onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <button onClick={() => {
                pSetValue (inputValue)
            }}>Display</button>
            <p>{pTagValue}</p>
        </div>
    )
}