import {useState} from "react";

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
            <input type="text" value = {value} />
            <button onClick={addOne}> + </button>
            <button onClick={lessOne}> - </button>
        </div>
    )
}

export default Counter;
