import { Fragement } from "react";
import Cbc from "./typeofComponent/Cbc";
import Fbc from "./typeofComponent/Fbc";
import Parent from "./Props/Parent"
import DefaultParent from './DefaultProps/DefaultParent'
import StateInFbc from "./State/StateInFbc";
import StateInCbc from "./State/StateInCbc";



 let App = ()=>{
    return(
        <>
        <h1>App</h1>

        {/* <Fbc/>
        <Cbc/> */}
        {/* <Parent/> */}

        {/* <DefaultParent/> */}

        {/* <StateInFbc/> */}

        <StateInCbc/>


        </>
    )
}
export default App;
