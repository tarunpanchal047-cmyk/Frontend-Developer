import { useState } from "react"


const StateInFbc = () => {

    let [count, setCount] = useState(0)

function increment(){
    if (count == 10){
        setCount(0)
        return
    }
setCount(count + 1);
}

function Decrement(){
    if (count == -10){
        setCount(0)
        return
    }
setCount(count - 1);
}



  return (
    <>
      <h1>StateInFbc : {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      
    </>
  )
}

export default StateInFbc
