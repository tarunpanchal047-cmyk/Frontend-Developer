//! What is State in REact ?
//----------------------------------
//^ State is a built-in React feature used to store and manage data that can change during a component's lifecycle.
//^  When state changes, React re-renders the component.



// **Hooks**
//----------------------------
//^ - **Hooks are special functions provided by React that allow functional components to use React features such
//^  as state, effects, context, etc.** Hooks were introduced in **React 16.8**.


//! Use State :  
// -------------------
//^ -->  useState is a react hook which helps function base component to make it form stateless to stateful.
//^  It accepts one argument that is called initial value and it returns an array. which consists two value.
//^  First value is the variable which holds the initial value. And 2nd value is the updater function which
//^  help to update initial value. 

//! Conditional Rendering  :
//--------------------------------------
// Conditional Rendering in React is the technique of rendering different UI elements or components based on a condition, 
// using JavaScript expressions like if, ternary, or logical operators. 
// const isLoggedIn = true; 
// <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
//  If isLoggedIn is true → shows Welcome User
//   If false → shows Please Login 
  
//!   Short-Circuit Rendering  :
//-----------------------------------------
//   Short-Circuit Rendering is a type of conditional rendering where logical operators (&& or ||) are used to render a
//   component only when a condition evaluates to true or false, without writing an explicit if-else. 
//   const isAdmin = true; {isAdmin && <h1>Admin Panel</h1>} 


import { useState } from "react";
function StateInFbc() {
    // let count = 10;

    let [count, setCount] = useState(0)
    // console.log(count)
    // console.log(setCount)

    function increment() {
        console.log(count)
        setCount(count++)
    }
    return (
        <>
            <h1>State In function Based Component {count} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default StateInFbc