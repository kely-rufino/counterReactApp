import './App.css';
import Counter from './components/Counter'
import Multiply from "./components/Multiply";
import Person from "./components/Person";



function App() {
    return (
        <div className= "App">
            <Person />
            <Counter/>
            <Multiply/>
        </div>
    );
}

export default App;
