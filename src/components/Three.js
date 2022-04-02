import { useContext } from "react"
import { NumberContext } from "../NumberContext"


const Three = () => {
    const {number,setNumber} = useContext(NumberContext);
  return (
    <div>
        <h1>I am component Three</h1>
        <p>Double up value of Number is : {number} </p>
        <button onClick={()=>setNumber(number*2)}>DoubleUp</button>
    </div>
  )
}

export default Three