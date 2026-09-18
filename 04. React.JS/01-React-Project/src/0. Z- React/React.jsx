
//! What is React JS ?

// It is a library of javaScript which is maintain by meta and group of individual developer.
//  It is developed by Jordan walke . A software engineer in Facebook.
//  React was deployed on facebook newsfeed In 2011. And later on Instagram in 2012.
//  Angular Vue javaScript backbone js etc are the other library which is used for creating single page application. Among this library react is very popular and lightweight as compare to other library.
//  It is create by Facebook for their internal application later they made at open source.
//  To install the react file or folder : We have to use NodeJS
//  NodeJS is the runtime environment which is used for executing js file outside the browser.
//  When we install react or any other library we have to used npm and npx .
//  npm and npx it comes by default with the nodeJs.

//! What is a library ?

//  A library is a collection of pre-written code that you can use to solve common problems,
//  instead of writing everything from scratch.
//  A library is a collection of modules that provide reusable functions or features. 
//  Analogy : A library is like a toolbox — you open it and use the tools you need,
//  instead of making your own tools every time. 
 
//!  What is a Framework ? 
//  A framework is a complete structure that gives you rules and a fixed way to build an application.
//  And it is  a collection of libraries . 
//  Example  Angular / Django / Spring Boot (Frameworks) → They tell you how to structure your app. 

//! Characteristics of React js 
//  ● React JS is a JS Library.  
//  ●  Component Based Architecture.  
//  ●  Open Source Language  
//  ●  React JS is used to make Single Page Applications.  
//  ● Declarative · Unidirectional  
//  ●  Learn Once, write anywhere  
//  ●  Virtual DOM . 



//! Files and Folder present inside the react application
// -----------------------------------------------------------------

//^ node_modules
// --------------
// It is the folder where all the installed library of a react project is stored.

//^ Src
// ------
// It is main folder where all the codes are written.

//^ .gitignore
// ---------
// It is a file that tells the git which files and folders should 'not to be uploaded on the GitHub.

//^ eslint.config.js
// -------------------
// It is the tool that check react code for mistake and bad coding practices. It automatically detect error and infrocaces coding standard in react application. It find syntax error missing bracket and warn about unused variables

//^ package-lock.json
// ------------------
// It is the file that saves exact version all the installed library so the project work same on every computer.

//^ package.json
// ----------------
// It is the file that tells what a project is which library its need and how to run the project

//^ readme file
// ----------------
// this file explains the project details and how to run it.

//^ vite.config.js
// -----------------
// It is a configuration file which is used to customize and control the vite behaviour for a project

//! What are Bundlers ? 
//  A bundler is a tool that takes many files in your project (JS, CSS, images, etc.) and 
//  combines them into fewer files so the browser can load your website faster.
//   In simple words they will take different files and bundle it into one . 

//! What is babbel ? 
// Babel is a js compiler that converts modern JavaScript into old JavaScript so that 
// all browsers can understand it. 

//! What is JSX ?
//  JSX (JavaScript XML) is a special syntax used in React that lets you write HTML-like code
//  inside JavaScript. 

//! Rules of jsx ?
//  ● JSX must return a single parent element. 
//  ● Use className instead of class. 
//  ● All tags must be properly closed. 
//  ● Only expressions allowed inside {}, not statements. 
//  ● JSX attributes must be camelCase. 
//  ● JSX must have valid HTML-like nesting. 
//  ● JavaScript values must be inside {}. 

//! Features of React JS
// ----------------------
//^ 1. Single page application
//^ 2. Component base architecture
//^ 3. Declarative
//^ 4. Virtual DOM


//! 1. Single page application : 
// ----------------------------------
// Nodes are single html file and dynamic its content as the user in the app this result in faster and smother transaction providing more like app experience.


//! 2. Component base architecture :
// ----------------------------------------
//  It is a way to build react application by breaking them into reusable independent pic of code. There are two type of component in react.
//     I. Class base component
//     II . Function base component

//! 3. React is declarative :
// ---------------------------------
//  because we describe what the UI should look like based on the state. React automatically update the DOM accordingly.

//! 4. Virtual DOM :
// -----------------------
//  It is a light weight copy of the real DOM. React uses virtual DOM to improves it performance instead of updating the actual real DOM. React first update the virtual DOM and figure out what change and then only updated data is patched to the real DOM.

//! What is reconciliation :
// ---------------------------------
//   IN reconciliation the old version of DOM is compare with the new virtual DOM to identify the changes that need to be updated in the real DOM. Whenever something changes in the application React creates a new virtual DOM in this new virtual DOM tree. Each element of the application is represented as a node. When the state or Prop of a component changes react creates a new virtual DOM and then compares it with the previous virtual DOM tree. this comparison is called Deeping.

// * React uses Huffman deefing algorithm to efficiently compares the old virtual DOM tree and newly updated DOM tree . After finding the diff react update only the changed node or element into the real DOM. Instead to re-rendering the entire application . This process improves react application performance and make it faster.

//! React fiber
// ----------------------
// It is the new reconciliation engine which is inducting react16. it is the improved version of react reconciliation algorithm . that makes rendering faster smoother and uninterruptable react fiber help react to handle large radaring task into small chunks . So important user interaction remains fast and smooth.


//! Diff btw class Base component or function Base component
// --------------------------------------------------------------------

//! -> class Base Component
// ---------------------------
// JS Classes
// State-full
// Life Cycle Methods
// Hooks
// Render Method
// this keyword

//! -> Function base component
// -------------------------------
// JS functions
// Stateless
// No Life cycle methods
// No Hooks
// No render Method
// NO this keyword


//! Modules in javaScirpt
// -----------------------------
// -> A module in js is a separate file that contains reusable code.
// ex : variable , classes function etx
// which can be exported and used in another file.
// Modules allows you to splite your code into smaller manageable pices. Insted of writing everything inside one big file you can divide the code into muntiple files and connect them using import and export.

//! -----> Types of modules in js
// -------------------------------------
//! 1. Common js:
// -----------------
//  It is a module system which us used in NodeJS. It uses require method and module. Export

//! 2. ES6 module : 
// ----------------------
// It is interduce in ES6(2015) It uses import and export keyword

//! Types of ES module.
// ----------------------------
//! named import and export : 
// ----------------------------------
// it allow u to export multiple variables and functions from a module using their name. It is called named import because your must have to use the exact exported name while importing
// Default import Export : Default export is used when a module export only one main value(function , class, obj , or variable). No Curley bracket were used for default import. We can give it any name while importing. Each module can have only one default export




//! Higher Order Component  :
// ● Higher order component is a component that receives another component as an argument and returns that particular component that it received.  
// ● It is also an alternative for props drilling.  
// ● HOC will return one function in that we have to specify what to render into the UI by using return keyword.  
// ● Here is an example of HOC on the basis of sending the props to the ChildComponentA & ChildComponentB via the HOC component.  
// ● Points to remember: a. While exporting wrap in HOC component. b. HOC will return a function.  
// Now inside this function we have to return JSX.  
//  Example : Two counter component.  

//! 🔹 What is Axios ? 
// ● A promise-based HTTP client for making requests to servers in React (or JS). 
// ● Helps in fetching, creating, updating, deleting data from APIs.
//^  🔹 HTTP Methods in Axios 
// 1. GET → Fetch data from server 
// axios.get("url") 
// 2. POST → Send/create data to server 
// axios.post("url", { data }) 
// 3. PUT / PATCH → Modify existing data 
// axios.put("url", { updatedData }) 
// 4. DELETE → Remove data from server 
// axios.delete("url") 
// Axios always returns a Promise → so you use .then().catch() or async/await 
//^ Steps to Use Axios 
// Install Axios 
// npm install axios 
// 1.  Import Axios 
// import axios from "axios"; 
// 2.  Make API Requests 
// Let {data}=  axios.get("https://api.example.com/data"); 




//! NavLink :
// ● It is equivalent to a Link component. 
// ● The only difference is that it will provide an extra attribute called class=”active”. 

//! useNavigate() :
// ● A React Router hook used for programmatic navigation (redirecting via code instead of Link/NavLink). 
// ● Returns a function (navigate) that lets you: 
// ○ Move to a different route. 
// ○ Go back/forward in history. By passing value like (navigate(-1) ) 