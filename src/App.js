import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import {useState} from 'react';
import {CounterContext} from './CounterContext'
import {NumberContext} from './NumberContext'


function App() {
  const [counter, setCounter] = useState(0);
  const [number,setNumber] = useState(10);

  return (
    <div className= "App">
      <h1>App Component</h1>
      <p>Current Couunter Value is : {counter}</p>
      <button onClick = {() => setCounter (counter+1)}>Increment</button>
      <button onClick = {() => setCounter (counter-1)}>Decrement</button>
      <p>Current value of Number is : {number}</p>
      <hr />
      <CounterContext.Provider value={{counter,setCounter}}>
        <One/>
        <Two/>
      </CounterContext.Provider>
      <NumberContext.Provider value={{number,setNumber}}>
        <Three/>
      </NumberContext.Provider>
    </div>
  );
}

export default App;
