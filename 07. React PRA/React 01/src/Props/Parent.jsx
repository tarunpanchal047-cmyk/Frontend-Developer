import Child from "./Child"



const Parent = () => {

    let str = "Hello React !";
let arr = ["Html", "CSS","JS"];
let obj ={
    id : 1,
    objname : "Tarun",
    sal : 8923445021
}
  return (
    <div>
      <h1>Parent</h1>
      <Child str={str} arr={arr} obj={obj}/>
    </div>
  )
}

export default Parent
