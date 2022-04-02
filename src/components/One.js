import { CounterContext } from "../CounterContext"
import { useContext } from "react";


const One = () => {
    const globeVal = useContext(CounterContext);

  return (
    <div>
        <h1>ComponentOne</h1>
        <p>Global Value : {globeVal.counter}</p>
        <button onClick={()=>globeVal.setCounter(globeVal.counter+1)}>Increment</button>
        <OneFirstChild/>
    </div>
  )
}

const OneFirstChild = () => {
    const {counter,setCounter} = useContext(CounterContext);
    return (
        <div>
            <h1>ComponentOne First Child</h1>
            <p>Global Value : {counter}</p>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        </div>
    )
}




export default One