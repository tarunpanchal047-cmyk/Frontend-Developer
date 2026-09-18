//! Context API : ----------
// -------------------
//^Props drilling is a process of sending the data from one component to another component to another
//^  component and so on. 
//^ we can not share the data directly to pass the data directly to middle component we have used content API. 
//! Steps to create the context API 
//? 1. Create Context
//? 2. Context Provider and Providing values 
//? 3. Use Context 

import ContextChild1 from "./ContextChild1"
import MyContext from "./MyContext"


const ContextParent = () => {

let data1 = 'Global Data'

  return (
    <div>
        <h1>ContextParent</h1>

        <MyContext.Provider value={data1}>

         <ContextChild1/>
         
        </MyContext.Provider>
        
    </div>
  )
}

export default ContextParent