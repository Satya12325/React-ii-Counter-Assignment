
import './App.css';
import {useState} from "react";
function App() {
  const [counter, setCounter] = useState(0)

  const handelclick = (value) => {
    setCounter(counter +value)
    console.log("add")
  }
  const handeldouble = (value) => {
    setCounter(counter *value)
  }
  return (
    <div className="App App-header">
   <h1>Counters</h1>
      <h2>{counter}</h2>
      <div>
      <button onClick={()=>handelclick(1)}>ADD</button>
      <button onClick={() => handelclick(-1)}>Reduce</button>
      <button onClick={() => handeldouble(2)}>double</button>
      </div>
      </div>
  );
}

export default App;
