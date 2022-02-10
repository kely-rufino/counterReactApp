import Person from "./Person";

const data = [
    {name: "Manuel", age: 23, hobby: "read"},
    {name: "Lilo", age: 12, hobby: "dance"},
    {name: "Rapunzel", age: 34, hobby: "brush the hair"},
    {name: "Coco", age: 10, hobby: "play music"}]

function List() {
    return (
        <div className="App">
            {data.map(value => <Person key={value.toString()} name={value.name}/>)}
            <button onClick={(eventHandler) =>{}}>Hide Person </button>
        </div>
    );
}


export default List;
