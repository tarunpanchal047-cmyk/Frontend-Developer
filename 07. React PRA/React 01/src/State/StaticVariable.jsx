

const StaticVariable = () => {
    let count = 0
    function handleClick(){
    count++
    console.log(count)
    }
  return (
    <div>
      <h1>StaticVariable : {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default StaticVariable
