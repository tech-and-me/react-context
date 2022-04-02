import {useContext} from 'react';
import { CounterContext } from '../CounterContext';

const Two = () => {
    const {counter,setCounter} = useContext(CounterContext);
  return (
      <div>
        <div>I am Main Component Two</div>
        <p>Value of counter is : {counter}</p>
        <button onClick={()=>setCounter(0)}>Reset</button>
      </div>
  )
}

export default Two