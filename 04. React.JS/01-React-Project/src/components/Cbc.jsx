//! Components in React : 
// -----------------------------
//^ ● Components are logical blocks of code used to create React applications. 
//^ ● A component is simply a block of code that we export and import to achieve reusability. 
//^ ● A web page is divided into multiple components (files) and then combined together inside a parent component (App.jsx). 
//^ ● Components are reusable , its a building block. 

//! Rules for Components :
// -----------------------------
//^ ● Component names must start with a capital letter. 
//^ ● Component files should be saved with .jsx extension (recommended). Example: App.jsx 

//! 1. Class-based Components (Stateful Components) :
// -----------------------------
//^  Class-based components are created using the class keyword in JavaScript 
//^  ● They have an inbuilt state object to store and manage data. 
//^  ● They can use lifecycle methods (like componentDidMount(), componentDidUpdate() etc.). 
//^  ● They are also known as stateful component . 

import React, {Components} from 'react'


const user = 'Tarun'
const age = 21

export default function Cbc(){
      return (
        <div>
          <h1>Class based components</h1>
          <br></br>
          
          <h2>Hello, Guys I am {user}</h2>
          <h3>and I am {age} years old</h3>
        </div>
      )
    }
