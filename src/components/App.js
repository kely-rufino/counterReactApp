import '../../../../Week8/my-app/src/App.css';

 const names = [
     "Coco",
     "Lilo",
     "Stitch",
     "Mulan"
 ]

function App() {
  return (
    <div className="App">
        {names.map(name => <p key={name}>{name}</p>)}
    </div>
  );
}

export default App;
