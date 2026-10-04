//& Anslation – 

//? Fresher Frontend Developer Interview Questions

//! Focus: 
//* HTML, CSS, JavaScript, React.js, REST API, Git/GitHub 

//^---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 1. Introduction & HR Questions 

//! 1 Tell me about yourself. 
// Hello, sir/ma’am.

// My name is Tarun Panchal. I have completed my Bachelor of Computer Applications from Maa Shakumbhari University,
// and I have also completed my Full Stack Web Development training from QSpiders.

// During my training, I worked with technologies like HTML, CSS, JavaScript, React.js, MongoDB. 
// My primary interest is Frontend Development, especially building responsive and user-friendly web applications using React.js.

// I have worked on several projects, including a Personal Portfolio Website, an Expense Tracker, and other basic projects 
// using React.js. While working on these projects, I learned how to create reusable components, manage state, work with APIs, 
// and build responsive user interfaces.

// I am a quick learner, hardworking, and responsible person. As a fresher, I am looking for an opportunity where I can apply
// my technical skills, gain real-world experience, and grow as a Frontend Developer.

// That's a brief introduction about me. Thank you.

//! 2 Why do you want to become a Frontend Developer? 
// I want to become a Frontend Developer because I enjoy creating websites and user interfaces. I like working with 
// HTML, CSS, JavaScript, and React.js. I want to use my skills to build responsive and user-friendly applications, 
// learn new technologies, and grow as a developer.

//! 3 Why should we hire you as a fresher? 
// As a fresher, I may not have professional experience yet, but I have a strong foundation in HTML, CSS, JavaScript, 
// and React.js. I have worked on projects where I practiced building responsive and user-friendly web applications. 
// I am a quick learner, hardworking, and open to feedback. I am confident that I can learn quickly, adapt to your team, 
// and contribute positively to the company.

//! 4 What do you know about our company? 
// I have researched your company and understand that it focuses on technology and delivering quality solutions to its clients. 
// I’m interested in the company because it offers an opportunity to work on real-world projects and grow as a Frontend Developer.

//! 5 What are your strengths and weaknesses? 
// My strengths are that I am a quick learner, hardworking, and responsible. I have good problem-solving skills and I enjoy learning
//  new technologies, especially in frontend development. I am also comfortable working in a team and taking feedback to improve my work.

// One of my weaknesses is that sometimes I spend extra time making sure my work is accurate and properly completed. I am working on this
//  by setting priorities and managing my time more effectively.

//! 6 Are you comfortable working from office?
// Yes, I am comfortable working from the office. I believe working from the office will help me learn from experienced team members,
//  communicate better with my colleagues, and gain practical experience. As a fresher, I’m also comfortable following the company’s
//   working hours and policies.

//! 7 Where do you see yourself in the next 2–3 years? 
// In the next 2–3 years, I want to become a strong Frontend Developer with good expertise in React.js and JavaScript. 
// I want to work on real-world projects, take more responsibilities, and grow professionally with the company.

//^-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 2. HTML 

//! 1 What is HTML? 
// Hyper text makeup language.
// It is used for creating structure in our websites.
// It is used for adding content in our websites.
// It is developed by Tim Berners Lie.
// HTML tag ?
// A container for some content or other HTML tags.
// The component used to design the structure of websites are called HTML tags.
// Different version of HTML :>
// HTML1 --> 1991 / 1993
// HTML2 --> 1995
// HTML3 --> 1997
// HTML4 --> 1999
// HTML5 --> 2014

//! 2 What are semantic HTML elements?
//  Semantic Tags 
//  Those tags, which provides to the developer and the about their content it is known as semantic tag.
//  There are 13 main semantic tags in HTML5.
//   <div class="container">
//     <header>Header</header>
//     <nav>Navbar</nav>
//     <aside>Aside</aside>
//     <article>Article</article>
//     <main>Main</main>
//     <footer>Footer</footer>
//     <section>Section</section>
//   </div>

//! 3 Difference between div and span. 
//  div tag
//    The <div> (Division) tag is a block-level container used to group HTML
//        elements together. It has no visual effect by itself but is mainly used for layout,
//         styling (CSS), and JavaScript. (block element)
//   <div class="box">
//     <h2>Welcome</h2>
//     <p>This content is inside a div tag.</p>
//   </div>

//   span tag 
//   The <span> tag is an inline container used to style or manipulate a small part 
//   of text or other inline elements. 
//   It does not start on a new line. (inline element)
//   <p> My name is <span class="red">Tarun Panchal</span>.</p>


//! 4 Difference between id and class. 
// An id uniquely identifies a single HTML element, while a class can be used by multiple elements
// for styling or scripting.
// <div id="nav">
//     <h1>Welcome</h1>
//     <p>This content is inside a div tag.</p>
// </div>

// <div class="box">
//     <h2>Welcome</h2>
//     <p>This content is inside a div tag.</p>
// </div>

//! 5 What is the alt attribute? 
//  alt stands for alternative text. It describes an image when the image cannot be displayed and improves
//  accessibility for users who use screen readers.
// <img src="dog.jpg" alt="Brown dog sitting in a garden">

// 1. Accessibility – Screen readers read the alt text to visually impaired users.
// 2. If the image fails to load – The alt text can be shown instead.
// 3. SEO – It helps search engines understand what the image represents.
// -----------------------------------------------
// The Anchor (<a>) tag in HTML is used to create hyperlinks that connect one web page to another page,
//          website, file, email address, or a specific section of the same page.
//  <a href="./home.html">Home Page</a>

//! 6 What are HTML5 input types?
// HTML5 provides different input types to collect different types of user data, such as text, email, password, number, 
// date, file, radio, checkbox, URL, and search. These input types also provide built-in browser validation and appropriate controls.
// Important HTML5 input types : text, email, password, number, date, radio, checkbox, file, submit.

// <form>
//     <input type="text" placeholder="Enter Name">
// <input type="email" placeholder="Enter Email">
//   <input type="password" placeholder="Enter Password">
//   <input type="number" placeholder="Enter Age">
// <button type="submit">Submit</button>
// </form>

//! 7 What is the difference between HTML and HTML5?
//  HTML is the older version of the markup language, while HTML5 is the latest version that introduces
//  semantic elements, multimedia support, and new APIs.
//     HTML                                                            HTML5                                            
// ---------------------------------------------------------------------------------------------------------
// Older version                                           Latest version                                   
// Limited multimedia support             Supports audio and video                         
// No semantic tags                                   Has semantic tags                                
// Needs Flash                                             No Flash required                                
// Limited APIs                                            Supports APIs like Geolocation and Local Storage 

//! 8 What are Tables in HTML?
//  The <table> tag in HTML is used to create a table for displaying data in rows and columns.
//              It is useful for showing structured information such as student records, employee details,
//               marksheets, product lists, and timetables.

// Student records : ----------------------------------
// <table>  	Creates the table
// <tr>	   Creates a table row
// <th>   	Creates a table heading
// <td>    	Creates table data/cell
// <thead>  	Groups table header
// <tbody>  	Groups table body
// <tfoot>    	Groups table footer
// <caption>   	Adds a table title

// <table border="1">
//     <tr>
//         <th>Name</th>
//         <th>Age</th>
//         <th>City</th>
//     </tr>

//     <tr>
//         <td>Tarun</td>
//         <td>25</td>
//         <td>Delhi</td>
//     </tr>
// </table>

//! 9 What is form validation? 
//  The <form> tag in HTML is used to create a form that collects user input. A form allows
//    users to enter information such as their name, email, password, phone number, address,
//     etc., and submit it to a server for processing.

// <form>
//     <label>Name:</label>
//     <input type="text">
// <label>Email:</label>
//     <input type="email">
// <label>Password:</label>
//     <input type="password">
// <button type="submit">Submit</button>
// </form>

// <form> → Creates the form
// <label> → Provides a label for an input
// <input> → Takes user input
// <textarea> → Takes multi-line text
// <select> → Creates a dropdown
// <option> → Defines dropdown options
// <button> → Creates a button

//! 10 Difference between localStorage, sessionStorage and cookies. 
// 🍪 1. Cookies : Cookies are small pieces of data stored by the browser and can be sent to the server
//  with HTTP requests.
// document.cookie = "username=Tarun";

// 💾 2. localStorage : localStorage stores data in the browser and the data remains even after closing
//  the browser until it is manually removed.
// localStorage.setItem("name", "Tarun");
// localStorage.getItem("name");
// localStorage.removeItem("name");

// 🕐 3. SessionStorage : SessionStorage stores data for the current browser tab/session.
// sessionStorage.setItem("name", "Tarun");
// sessionStorage.getItem("name");

//^-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 3. CSS 

//! 1 What is CSS? 
//  CSS [ Cascading Stylesheet ]
//  It is developed by Hakon Wiem Lie.
//  It stand for case cading StyleSheet.
//  The word CaseCading means adding or coding style in html web pages.
//  It is used to style and giving layout to the webpages.
//  Its Purpose is to control the look and feels of the web pages.
//  Most of the element have Some default CSS.

// “Adding or pouring Stylesheet to the HTML document. “
// Version of CSS :-
// CSS Version Year
// CSS 1 ---> 1996
// CSS 2 ---> 1998
// CSS 3 ---> 1999-2011    Latest version ( it is re;lased form of moduels )
// CSS 4 ---> 2014

// Ways to adding CSS :-
// (i) Inline CSS
// (ii) Internal CSS
// (iii) External CSS
// (iv) @import(url)

// 1. Inline CSS :-
// Applying the CSS in the same line by using style attribute.
// If you are applying CSS in the same Line in the opening tag of the elements 
// the style attributes which know as INLINE CSS.

// 2. Internal CSS :-
// Applying the CSS inside the style tag ( writtened inside head tag ).
// It is used to add the CSS using the Style tag inside the head tag.

// 3. External CSS :-
// Creating a seperate CSS file ( fileName.css ) and then link that external CSS file
//  with the HTML file by using link tag.
// In the External CSS we will create seprate CSS file with .css extensation and 
// we have to link this file with our html document using the link tag it is known 
// as EXTERNAL CSS.

// Property Apply :-
// CSS Property apply First (INLINE CSS)
// But EXTERNAL or INTERAL depand on program Execution.

// 4. @import(url) :-
// It is used for importing multiple CSS files inside one CSS file and link that CSS file
//  to the HTML document.
// It is used at the top of the CSS file.

//! 2 Explain the CSS Box Model. 
// It is the representation of all the elements in our html inside the browser.
// It is representated in the form of [ ] .
 
// And there are Four Layers int the mox model :-
// It consists of :
// 1. Margin :  Space outside the border, is known as margin.
// 2. Border :  Outline of the content is known as border.
// 3. Padding :  Space between border and content is known as padding.
// 4. Content :  Which is present inside the element is called contain.

//! 3 What is the difference between em, rem, %, vh abd vw units ?
// 1. em : em stand for element. em is relative to the font size of its parent.
// 2. rem : rem stand for root element. rem is relative to the root (html) font size.
// 3. % : % is generally relative to the parent element's corresponding size.
// 4. vh : vh means viewport height. 1vh = 1% of viewport height.
// 5. vw : vw means viewport width. 1vw = 1% of viewport width


// | Unit        | Based on                                  | Example | Common Use                 |
// | ----------- | ------------------------------------- | ------------ | -------------------------- |
// | **em**  | Parent element's font size | `2em`   | Font size, padding, margin |
// | **rem** | Root (`html`) font size    | `2rem`  | Font size, spacing         |
// | **%**   | Parent element's size      | `50%`   | Width, height              |
// | **vh**  | Viewport height            | `100vh` | Full-screen sections       |
// | **vw**  | Viewport width             | `100vw` | Full-width elements        |


//! 4 What is CSS Flexbox?                                 
// Using flex properties we can arrange flex items in one direction across the x-axis and y-axis.
// X-axis is known as main axis.
// Y-axis is known as cross axis.

// FLEX-ITEM or FLEX CHILDREN
// Flex items or flex-children are the child element which are present directly inside the flex-container
//  FLEX-CONTAINER Properties.
 
// 1.  display - flex :-
// Applying display : flex ;  to an HTML element turn it into a flex container. 
// Its immediate child elements automatically becomes flex items.

// 2.  flex - direction :-
// This properties control the direction of flex.
// It control wheather flex-items are arrange in row or column

// 3.  justify - content :-
// It is used to align flex-items across main axis (x-axis)
// This property used to arrange and space out items horizontally inside a container.

// Note :  If you change your layout’s direction to a column using flex - direction : column ;
//   justify content flips and controls the vertical arrangement instead.

// 4.  align - item :-
// It is used to align flex-items across cross axis (Y-axis)
// This property tells that how items inside a container line up and down ( vertically ).

// Note :  If you change your layout direction to columns , these directions swap, but for standard
//  rows just remember : align - items  is your vertical control !

// 5.  gap :-
// It is use to add gap between flex-item without using margin property.
// Gap in CSS is a property, that creates space between items inside a layout.
// It acts like an automatic invisible divider between boxes, preventing them from touching each other.

// 6.  flex -wrap :-
// It is used to control weather flex-itme moving multiple line.
// It is a CSS property that decides whether your items should stay on one single line or drop down
//  to a new line when they run out of the space.

// 7.   align - content :-
// It is used to align multiple rows of flex-item across cross axis(Y-axis).
// controls the spacing between multiple rows or columns of flex items.
// It decides how extra space is distributed when your items wrap across more than one line.

//! 5 Difference between justify-content, display: flex and align-items. 
// 1.  display - flex :-
// Applying display : flex ;  to an HTML element turn it into a flex container. 
// Its immediate child elements automatically becomes flex items.

// 2.  flex - direction :-
// This properties control the direction of flex.
// It control wheather flex-items are arrange in row or column

// 3.  justify - content :-
// It is used to align flex-items across main axis (x-axis)
// This property used to arrange and space out items horizontally inside a container.

// Note :  If you change your layout’s direction to a column using flex - direction : column ;
//   justify content flips and controls the vertical arrangement instead.

// 4.  align - item :-
// It is used to align flex-items across cross axis (Y-axis)
// This property tells that how items inside a container line up and down ( vertically ).

//! 6 What is CSS Grid? 
// Display Grid is a layout in system in css which is used to create two dimensional 
// layout using rows and column.
// CSS grid is highly powerful two-dimentional layout system built directly into CSS.
// Unlike Flexbox , which primarily handles content in a single direction (either rows or columns).
// CSS grid lets you align and arrange elements in both horizontal rows and vertical columns
//  simultaneously.
// It works on a parent child relationship :-  
// It turn a parent element into a grid container , and its direct children automatically become grid items.

// 1.  Display : grid :-
// It is a CSS rule that turns an HTML elements into a grid container , letting you arrange
//  its content into two .
// It gives you total control over web layouts by letting you work in two dimentions.
// Simultaneously : horizontally and vertically.
//  grid: Generates a block-level grid
// inline-grid: Generates an inline-level grid

// 2.  Grid-template-rows / Grid-template column :-
// This properties define the structure of the Grid which means how many rows and column should be created.
// And It is also used to specfies the sizes of the row and column should be created.

// 3.  Grid-rows-start / Grid-row-end :-
// This properties define where the Grid Items start and end vertically.

// 4.  Grid-column-start / Grid-column-end :-
// This properties define where the Grid Items start and end Horizontally.

//! 7 What is responsive web design? 
// Responsive web design (RWD) is an approach to building websites so they automatically adapt to different
// screen sizes and devices, such as smartphones, tablets, laptops, and desktop monitors.

// For example, a website might show three columns on a desktop, two columns on a tablet, and one column on a
// phone. Images, text, menus, and buttons can also resize or rearrange themselves to remain easy to use.

// Responsive design commonly uses flexible layouts, responsive images, CSS Flexbox/Grid, and media queries.
// Media queries allow CSS rules to change when the viewport reaches particular sizes, called breakpoints.

//! 8 What are media queries?
// A media query is like an “IF statement” for your website’s design.
//  It tells the browser: “IF the screen is a certain size, THEN Change the way the website looks.
// It is the main tool developers use to make websites look good on Phones, tablets, and desktops
//  without making completely separate version of the side.

// ⇒  min-width  and  max-width :-
// min-width means “ this size or larger” (greater than or equal to)  and max-width means “ up to
//  this size “ (less than or equal to).

// ⇒  min-height and  max-height:-
// min-height and max-height in CSS media Query look at the vertical height of the browser window
//  and decide when the apply your styles based on that size. 

// //! 9 Explain relative, absolute, fixed and sticky positioning. 
// 1. Position : static
// The default position for every element.
// In CSS, it is the default positioning method for every HTML element automatically conforms
// to the normal.
// Static is the default position where the element follows the normal documnet.

// 2. Position : relative
// Positioned relative to its normal/original position on the page.
// In CSS, it keeps an element in its normal spot on the page but allows you to move it
//  around without affecting the element around it.

// 3. Position : absolute
// Absolute Position is used to go back element relative to its nearest ancestor
// The element is taken out of the normal page flow and you can place it exactly where 
// you want to using properties like top, left, right, and bottom.
// It does not stay in its original place.
// It moves relative to its nearest positioned parent.
// If no such parent exists —> It moves relative to the whole page ( body ).

// 4. Position : fixed
// It stays in the exact same spot on your screen even when you scroll up and down.
// It means the element stay in the same position to the whole page, even when the user scroll the page.
// It keeps an element locked to a specific spot on the screen, regardless of scrolling.

// 5. Position : sticky
// A hybrid mix of relative and fixed.
// Sticky it behaves type relative until a scroll point then it becomes fixed.
// It means an element behaves like relative at first but when you scroll to a certain point, it becomes fixed and stick to the screen.
// It lets an element scroll normally until it reaches a specified position, then it sticks there like a fixed element.
// Example : - CODE

// //! 10 What is CSS specificity? 
// CSS specificity is the priority system used by the browser to determine which CSS rule should be applied when multiple
// rules target the same HTML element. Inline styles have the highest specificity, followed by IDs, classes, and element selectors.
{/* <p id="text" class="para">Hello</p>
p {
  color: blue;
}

.para {
  color: green;
}

#text {
  color: red;
} */}

// //! 11 What is z-index? 
// z-index is a CSS property used to control the stacking order of overlapping elements.
// An element with a higher z-index appears in front of an element with a lower z-index.
// .box1 {
//   position: absolute;
//   z-index: 1;
// }
// .box2 {
//   position: absolute;
//   z-index: 2;
// }                                 Here, .box2 will appear above .box1 because 2 > 1.

// z-index: 2  →  🟦 Box 2 (Front)
// z-index: 1  →  🟥 Box 1 (Behind)
// position: relative;
// position: absolute;
// position: fixed;
// position: sticky;



//^--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 4. JavaScript

//! 1 What is JavaScript? 
// ~ Javascript is a programming language. We use it to given instructions to the compiler.
// ~ It is used to add dynamic functionality to our website.
// ~ Examples : Include fetching the data from an API, authentication, and authorization.
// ~ It is a scripting as well as a programming language.
// ~ It is an object-based programming language.
// ~ It is a partially object-oriented programming language because JavaScript uses prototypal inheritance.

    //^ History of JS
    //~ It was developed in September 1995 by Brendan Eich in only 10 days.
    //~ Initially, it was named Mocha. Then, the name was changed to LiveScript.
    //~ Again, for marketing purposes, the name was changed to JavaScript because at that time Java was a very popular language. 
    //~ To get the popularity of Java, the owner of Java (Sun Microsystems) and the owner of JavaScript (Netscape Corporation) together 
    //~ made an agrement and then the name was changed into JavaScript.
    //~ Again, in 1997, JavaScript became ECMA Script. ECMA stands for European Computer Manufacturers Association.
    //~ Then, different versions of ECMAScript were released. The latest version of ECMAScript is ECMAScript 2026.
    //~ The famous versions of ECMAScript are: ES6, ES7 and ES9.

        //^ Feature of ECMA Script
                //* Let keyword
                //* const keyword
                //* Arrow function
                //* Promises
                //* Symbols
                //* Async, Await
                //* map, filter , reduce
                //* spread operator
                //* rest parameter etc.
 
        //^ Featuers of JavaScript
                //* Dynamic In nature
                    //~ Variables are not bound to store specific data, inside one variable, you can store any type of data.
                //* Interpreted 
                    //~ It means the JS code will be checked line by line from top to bottom, left to right.
                //* Synchronoused 
                    //~ The code will be executed line by line from top to bottom, left to right.
                //* Signle theraded
                    //~ It means the JS engine will execute only one task at a time. After completing the previous statement, only then the next line of code will be executed. But we can make JavaScript change from synchronous to asynchronous by using Promises and async/await.
                //* Weekly and lossely type programming language
                    //~ It means a semicolon is not mandatory at the end of every line, but if you are writing multiple statements on the same line, then you have to put a semicolon.

//! 2 Difference between var, let and const. 
//! TOKEN : 
//^ Smallest individual unit of program.

//! Variable rules : 
//^ 1. Variable names are case sensitive "a" and "A" is different.
//^ 2. Only letters, digits, underscore(_) and $ is allowed. (not even space)
//^ 3. Only a letter, underscore(_) or $ should be 1st character.
//^ 4. Reserved words cannot be variables names.

//! VARIABLE:
    //^ Variables is a just like a container which is used to store the data. It will be change.
    //! There are three types of variabile :
        //* VAR
        //* LET
        //* CONST

     //! VAR : 
     //^ A function-scoped variable that can be re-declared and re-assigned.
        //? declaration --> possible
            //var abc;
        //? initialization --> possible
            //abc = 10;
        //? Declaration & Initialization (same) --> possible
            //var a = 100;
        //? Re-Declaration; --> possible
            //var a = 1000;
        //? Re-Initialization --> possible
            //a = "abc";
    
    //! LET : 
    //^ A block-scoped variable that cannot be re-declared in the same scope but can be reassigned.
        //? declaration --> possible
            //let abc;
        //? initialization --> possible
            //abc = 10;
        //? Declaration & Initialization (same) --> possible
            //let a = 100;
        //? Re-Declaration; --> Not possible
            //let a = 1000; //not possible
        //? Re-Initialization --> possible
            //a = "abc";

    //! CONST : 
    //^ A block-scoped variable that cannot be re-declared or reassigned after initialization.
        //? declaration --> Not possible
            //const abc; //not possible
        //? initialization --> Not possible
            //abc = 10; //not possible
        //? Declaration & Initialization (same) --> possible
            //const a = 100; //possible
        //? Re-Declaration; --> Not possible
            //const a = 1000; //not possible
        //? Re-Initialization --> Not possible
            //a = "abc"; //not possible


//! 3 Difference between == and ===. 
//! Identifiers :
//^  An Identifier is the name that given to the variable by the programmer.

//! Rule of Identifier 
//     ~ It should not start with number.
//     ~ Special character are not allowed.
//     ~ Only underscore and clone are allowed.
//     ~ Reserved keyword is not use the identifier.
//     ~ Spaces are not allowed between identifier. 
//     ~ It is a case sensitive language. which means lowercase and uppercase treat differently.

//! Special Operator : 
//^ Special operators are operators that perform specific tasks beyond basic arithmetic or comparison. Interviewers often ask about
//^  these operators.

//* Type coersion ( == vs === ) Type Coercion is the automatic conversion of one data type to another data type by JavaScript during 
//* an operation or comparison.

//! == vs ===
//?   == : It checks only values 
//?   === : It checks values as well as data types. It is also knowm as stricttype checking.

//! 4 Difference between null and undefined. 
//^ NULL : - if we assign null to a variable. it means it will not have no value.
//? Example Code : let user = null;
//?                      console.log(user);


//^ UNDEFINED : - means the variable has been declared but not assigned any 
//^ value yet.
//? Example Code : let a;
//?                      console.log(a);

//^ UNDECLARED : - An undeclared variable is a variable that is used without being declared using let, const, or var.
//? Example Code : let name = "Tarun";
//?                              console.log(name);

//^ 🧠 Easy Trick
//? Undeclared = Variable used without declaration
//? let name = "Tarun";  → Declared ✅
//? name = "Tarun";      → Undeclared ❌


//! 5 What are primitive and non-primitive data types? 
//! Datatype : 
//^  Data type is the type of value that variables can store. In JavaScript, data types are mainly divided into two parts Primitive
//^  and Non-Primitive types.

//*---  Primitive types include Number, String, Boolean, Undefined, Null, BigInt, and Symbol.
//*---  Non-Primitive types include Object, Array, Function, and Date. We can check the type of a value using the typeof operator.



//? Typeof : It is tells which type of data, you are using.

//! 1. Primitive (Immutable) : 
//^  Primitive datatypes are the basic or simple datatypes that store in a single value directly. They are immutable,
//^  which means their values cannot be changed once created (changing them creates a new value).

//      ? number : The Number data type is used to store integers and decimal (floating-point) values.
//      let no = 12345
//      console.log(no)
//      console.log(typeof no)       //number

//      ? string : The String data type is used to store text. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
//      let str = "true"
//      console.log(str)
//      console.log(typeof str)      //string

//      ? boolen : The Boolean data type stores only two values: true or false.
//      let bool = true
//      console.log(bool)
//      console.log(typeof bool)      //boolen

//      ? null : null represents an intentional empty value. It means the variable currently has no value.     
//      let xyz = null
//      console.log(xyz)
//      console.log(typeof xyz)    // object

//      ? undefined : A variable is undefined when it is declared but no value has been assigned to it.
//      let data
//      console.log(data)
//      console.log(typeof undefined)      //undefined

//      ? bigInt : BigInt is used to store very large integers that are beyond the safe limit of the Number data type.
//      let bigData = In
//      console.log(bigData)
//      console.log(typeof bigData)      //bigInt

//      ? symbol : A Symbol creates a unique and immutable identifier, often used as unique object property keys.
//      let sym1 = Symbol("data1")
//      let sym2 = Symbol("data2")
//      console.log(sym1 === sym2)
//      console.log(sym1 == sym2)
//      console.log(typeof sym1)      //symbol

// console.log([]+{})
// console.log({}+[])
// console.log(!![])
// console.log(!!{})
// console.log(typeof NaN)
// console.log(undefined + undefined)

//! 2. Non-primitive :
//^  Non-Primitive data types are complex data types that can store multiple values or collections of data. They are stored by reference,
//^  and their contents can be modified.


//     ? array : An Array stores multiple values in a single variable.
//     let arr = []
//     console.log(arr)
//     console.log(typeof arr)   //object

//    ? object : An Object stores data in key–value pairs.
// let obj = {}
// console.log(obj)
// console.log(typeof obj)        //object

//     ? function : A Function is a reusable block of code that performs a specific task.
//     function abc(){
//     console.log("function")
// }
// console.log(typeof abc)    // function
//?                                  0, false, null, undefined, NaN, "", 0n, -0, document.all

//! 6 What is a function?
//^ It is a resuable pice of code which help us to avoid the repeteation of code in our program. 
//^ It help us to follow dry principal (do not repeat yourself).
// function ab(a,b){
//     console.log(a + b);
// }
// ab(10,20);

//! 7 What is a callback function? 
//^  A function which is passed as the argument it is known as callback function.
// function abc(a,b,callback){
//     callback(100,200,10000);
// }
// abc (10,20,function(a,b,c){
//     console.log(a+b+c);
// })
// abc()

//! 8 What is event bubbling and event capturing?
//^ event propogation : the process of calling and event is known as propogaiton 
//^ there are two types of event propogation 
//? 1. event bubbling : event bubling the process of calling innner event first and the out of the by default all event handler event bubbling.
//? 2. event capturing : the process of calling outer event first and then the inner event is known as event capturing
//? if we went to make over to perform of caturing then we have to pass true as the last argument and the event lishner


//! 9 What are arrow functions? 
//^ Arrow function (ES6) : 
//^  It is also known as fat arrow function. It is the shorter form of writing function.
// let fun = () => {
// console.log("arrow function");
// }
// fun();

//! 10 What is destructuring? 
//^ Destructing in Array 
// let arr = ["data1", "data2", "data3", "data4", "data5"]

// let [a,b, ...remainingData] = arr
// console.log(a)
// console.log(b)
// console.log(remainingData)


//^ Deastructing in Object :

// let obj = {
//     id : 1,
//     objName : "abc",
//     isDev : true,
//     sal : 328789,
//     isTeaster : null
// }
// console.log(obj.id)
// console.log(obj.sal)
// let {id,sal,...data} = obj;
// console.log(id)
// console.log(sal)
// console.log(data)

//^ Destructing nested :

// let obj = {
//     id : 1,
//     objName : "abc",
//     isDev : true,
//     sal : 328789,
//     isTeaster : null,
//    address : {
//     city : "Delhi",
//     pin : 12432
//    }
// }
// console.log(obj.address.city)
// let {sal} = obj
// console.log(sal)
// let {city} = address;
// console.log(city)

//! Destructuring in javascript is a shortcut for uppacking values from arrays or properties from objects
//! and saving them into variables. It is a clearner way to extract data without writing repetitive lines of code.

//? Array Destructinhg  (order matters) : Javascript assigns values to your variables based on their exact position 
//?     in case of array. you can name the variable whatever you.

//? Object Destructing (Names Matters) : Beacause object properties do not have a set of order, javascript looks of variable the match
//? the exact key names inside the object.

//& The javacript spread operator (...) is like unpacking items out of a container (like an array or an object) and 
//& spreads them into a new place.

//& The rest parameter is a javascript feature that lets a function accept any number of extra arguments and bundles them 
//& cleanly into a single array. It is written using three dots (...) followed by a name of your choice.


//! 11 What are spread and rest operators?
//^  The Rest Operator (. . .) collects multiple values into a single array. It is commonly used in function parameters and destructuring.
// Example : 1. Rest with Array
// const numbers = [10, 20, 30, 40];
// const [first, ...remaining] = numbers;
// console.log(first);
// console.log(remaining);                                         //        10               //       [20, 30, 40]


// Example : 2. Rest with Object
// const user = {
//     name: "Tarun",
//     age: 22,
//     city: "Gurugram"
// };
// const { name, ...details } = user;
// console.log(name);
// console.log(details);                                                                                        //   Tarun                            //      { age: 22, city: "Noida" }


//^ The spread operator (. . .) is used to expand or unpack elements of an array or properties of an object. It is commonly used for copying, combining arrays/objects, and passing array elements as function arguments.
// Example : 1. Spread with Array
//  const arr1 = [10, 20, 30];
//  const arr2 = [...arr1];
//  console.log(arr2);


// Example : 2. Spread with Object
// const user = {
//     name: "Tarun",
//     age: 22
// };
// const newUser = {
//     ...user,
//     city: "Gurugram"
// };
// console.log(newUser);


//!  Arguments Object :
//^  It is a default array like object present in the non-arrow function, which allows us to access all the arguments passed
//^  while calling the function without using the parameter.

// function sum(){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[0]+ arguments[1]);
//     }
// sum(100,200);


//! Nested function :
//^  Function present inside a function is known as nested function.

// function outer(){
// var a = 100;
// function inner(){
//     var b = 200;
//     console.log(a+b);
// }
// inner();
// }
// outer();

//!  Closure : 
//^  It is a closure created by the outer function, when the inner function is trying to access the data, which is present in the outer.
// function outer(){
// let name = "Tarun"
// function  inner(){
//     console.log(name)
// }
// return inner;
// }
// let result = outer();
// result();

//! 12 What are map(), filter() and reduce()? 
//!  Map() :
//^  It is used to iteral and modify the elements of the array. It accepts a callbackfunction, which is executed for all the 
//^  elements present inside the array.

// let arr = [10,20,30,40,50,60];
// console.log(arr);
// let res = arr.map(m =>{
//       return m + 5;
// });
// console.log(res);



// let arr = [10,20,30,40]
// let res = arr.map(function(val){
//     return 25;
// })
// console.log(res)



//! filter() :
//^  It is used to filter an array and returns new array which consists only those element which passes the condition.
// let arr = [1,2,3,4,5,6,7];
// let res = arr.filter( function(val){
//     if(val > 4) return true;
// })

// console.log(res);

//! reduce() :
//^  It always return a single value. it accepts two arrguments callback function, and initial data which is optinal.
// ? accumulator : it is the total result given by the reduce method.
// ? current Val : it store each element present inside an array.
// ^ syntax : arr.reduce(callback,initialVal);

// let arr = [1,2,3,4,5,6,7,8,9];

// let res = arr.reduce((acc,currentVal)=>{
//     return acc+currentVal;
// },10);
// console.log(res);

//! 13 What is DOM? 
//^ BOM / Window : BOM stand for Browser Obectj Model.
//^ Whenever we open any browser the browser .it self consider as an object this object is known as BOM.
//^ The another name of BOM is window. It is the global obj in the forentend JS.
//? Some main Object present inside the BOM is :
// Document (DOM)
// Navigator 
// Location
// Screen
// History 

//^ DOM Stands for Document Object Model.
//^ Whenever we run html code the browser inside the browser. browser create this tree like structure is known as DOM TREE.
//^ Inside the dom tree all the html elelement are represented in form of Nodes 
//^ this dom tree is created to manupulate the html to the javascript.(manupulate means adding the element removing the element, adding the attribue removing the attribute,
//^     adding the styling and removing the style )

//! 14 What is a Promise? 
//^ Promise : It is a object. it tells completion or faliure of a synchronous task.
//^ There are 3 states of promises :
//? resolved / fulfilled
//? rejected / failed
//? pending / waiting 

// let p1 = new Promise((resolve,rejected)=>{
    // resolve('p1 is resolved')
    // rejected('p1 is rejected')
// })
// console.log(p1);

//^ instance methods
//? then 
//? catch 
//? finally

// p1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally")
// })

//! Promise Static Methods :
//^ Promise.all(): It accept an array which consists multiple promises. It resolves when all the promise present 
//^ inside the array is resolved. It rejects when any one of promise 

// let pTotal = Promise.all([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


//^ Promise.allSettled(): It accept an array which consists multiple promises. It returns a new promise.
//^ It wait for all the promise present inside the array to sellted down, and returns the complete information about each promises.

// let pTotal = Promise.allSettled([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//^ Promise.race(): It accepts an array which consists multiple promises,  it returns a new promise. It returns 
//^ the first settled promise, either it is resolve or it is rejected.
// let pTotal = Promise.race([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//^ Promise.any(): It accepts an array which consists multiple promises, it returns a new. It returns 
//^ the first resolved promise, if none of the promise is resolved then it throws an aggregate error.
// let pTotal = Promise.any([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//! 15 What are async and await? 
//^ fetch() : It is the inbuilt method, which is used to fetch the data from the api, server or backend.
// let res = fetch('https://api.github.com/users')
// res.then((data){
//     return data.json()
// }).then((actualData)=>{
//     console.log(actualData)
// }).catch((err)=>{
//     console.log(err)
// })

//^ async await :
//& async : It is a keyword which convert a function into asynchronous function.
//& await : It is a keyword which wait for the pormise to settled down. It can be only used within asyn function.
// async function abc(){
// let res = await fetch('https://api.github.com/users')
// let actualRes = await res.json()
// console.log(actualRes)
// }


//^-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 5. React.js 

//! 1 What is React.js? 
//^  React is a JavaScript library developed by Facebook. It was developed by Jordan Walke a software engineer and open-sourced in 2013.
//^  React is used to build interactive user interfaces and single-page applications. It uses reusable components to make development easier.
//^  Node.js is commonly used for React development, while npm is used to install packages and npx is used to run packages.

//  It is the javaScript library in which is maintain by meta and group of individual developer.
//  It is developed by Jordan walke . A software engineer in Facebook.
//  React was deployed on facebook newsfeed In 2011. And later on Instagram in 2012.
//  Angular Vue javaScript backbone js etc are the other library which is used for creating single page application. 
//  Among this library react is very popular and lightweight as compare to other library.
//  It is create by Facebook for their internal application later they made at open source.
//  To install the react file or folder : We have to use NodeJS
//  NodeJS is the runtime environment which is used for executing js file outside the browser.
//  When we install react or any other library we have to used npm and npx .
//  npm and npx it comes by default with the nodejs.
 
//! What is a library ?

//  A library is a collection of pre-written code that you can use to solve common problems,
//  instead of writing everything from scratch. For example, React is a JavaScript library used for
//  building user interfaces. Examples : React, jQuery, Lodash, Axios.

//  A library is a collection of modules that provide reusable functions or features. 
//  Analogy : A library is like a toolbox — you open it and use the tools you need,
//  instead of making your own tools every time. 
 
//!  What is a Framework ? 
//  A framework is a complete structure that gives you rules and a fixed way to build an application.
//  And it is  a collection of libraries . 
//  Example :  Next.js / Angular / Django / Spring Boot (Frameworks) → They tell you how to structure your app. 

//! Characteristics of React js 
//  ●  React JS is a JS Library.  
//  ●  Component Based Architecture.  
//  ●  Open Source Language  
//  ●  React JS is used to make Single Page Applications.  
//  ●  Declarative  Unidirectional  
//  ●  Learn Once, write anywhere  
//  ●  Virtual DOM.

//! Modules in javaScirpt
// -----------------------------
// -> A module in js is a separate file that contains reusable code.
// ex : variable , classes , function etc.
// which can be exported and used in another file.
// Modules allows you to splite your code into smaller manageable pices. Insted of writing everything inside one big file you can divide
// the code into muntiple files and connect them using import and export.

//! -----> Types of modules in js
// -------------------------------------
//! 1. Common js:
// -----------------
//  It is a module system which us used in NodeJS. It uses require method and module. Export

//! 2. ES6 module : 
// ----------------------
// It is interduce in ES6(2015) It uses import and export keyword

//! Types of ES6 module.
// ----------------------------
//! named import and export : 
// ----------------------------------
// it allow u to export multiple variables and functions from a module using their name. It is called named import because your must have 
// to use the exact exported name while importing.

//! Default import Export : 
// Default export is used when a module export only one main value(function , class, obj , or variable).
// No Curley bracket were used for default import. We can give it any name while importing. Each module can have only one default export


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
// It is the tool that check react code for mistake and bad coding practices. It automatically detect error and
// infrocaces coding standard in react application. It find syntax error missing bracket and warn about unused variables

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
// It is a configuration file which is used to customize and control the vite behaviour for a project.

//! What are Bundlers ? 
//  A bundler is a tool that takes many files in your project (JS, CSS, images, etc.) and 
//  combines them into fewer files so the browser can load your website faster.
//   In simple words they will take different files and bundle it into one . 

//! What is babbel ? 
// Babbel is a js compiler that converts modern JavaScript into old JavaScript so that all browsers can understand it. 

//! What is JSX ?
//  JSX (JavaScript XML) is a special syntax used in React that lets you write HTML-like code inside JavaScript. 

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
//  It is a way to build react application by breaking them into reusable independent pices of code. There are two type of component in react.
//     I. Class base component
//     II . Function base component

//! 3. Declarative :
// ---------------------------------
//  because we describe what the UI should look like based on the state. React automatically update the DOM accordingly.

//! 4. Virtual DOM :
// -----------------------
//  It is a light weight copy of the real DOM. React uses virtual DOM to improves it performance instead of updating the actual real DOM.
//  React first update the virtual DOM and figure out what change and then only updated data is patched to the real DOM.

//! What is reconciliation :
// ---------------------------------
//   In reconciliation the old version of DOM is compare with the new virtual DOM to identify the changes that need to be updated in the real DOM.
//   Whenever something changes in the application React creates a new virtual DOM in this new virtual DOM tree. Each element of the application is represented as a node.
//   When the state or Prop of a component changes react creates a new virtual DOM and then compares it with the previous virtual DOM tree. this comparison is called Deeping.

//*  React uses Huffman deefing algorithm to efficiently compares the old virtual DOM tree and newly updated DOM tree . 
//*  After finding the diff react update only the changed node or element into the real DOM. Instead to re-rendering the entire application.
//*  This process improves react application performance and make it faster.

//! React fiber
// ----------------------
//  It is the new reconciliation engine which is inducting react16. it is the improved version of react reconciliation algorithm.
//  that makes rendering faster smoother and uninterruptable react fiber help react to handle large radaring task into small chunks.
//  So important user interaction remains fast and smooth.


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



//! 2 What is a component?
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

//! 2. Function-based Components (Stateless Components) :
// -----------------------------
//^  Function-based components are created using JavaScript functions. 
//^  ● They do not have state in older React (before hooks). 
//^  ● They were used only for UI presentation without logic. 
//^  ● Known as Stateless Components (old name). 

//! Fragment : 
// --------------------------------
//^ A Fragment in react is used to multiple elements without adding extra node in the DOM tree. Fragment help us to avoids extra div wrapper. 
//^ There are two ways to creating fragment.
//^  ----> Way of writing fragment
//^         1. <Fragment></Fragment>   ------------ named 
//^         2. <> </>                  ------------ empty  

//! 3 What are props? 
//! PROPS : ----------
// -------------------

//^ It is a component that passing the data form one component to another component is known as props.
//& Props is available in both class Base component and function base component.
//& It is passed just we passes attributes in the html.

//! Pros Drilling : --------
// -----------------

//^ Passing the data from one component to nested child component is known as props drilling.
//& The disadvantage is props drilling is unnecessary re-rendering of component to avoid this 
//& unnecessary re-rendering of component we using one hook that is use context(context API).

//? -> Props are immutable and uni-directional.

//! Defult props : 
// -------------------------
//^ -->  Defult props are the predefine value that a react component uses when a specific props is
//^      not provided by the parent prop parent component. they act like backup values to insure the component
//^      still works properly even if no value are passed.


//! 4 What is state? 
//^ State is a built-in React feature used to store and manage data that can change during a component's lifecycle.
//^  When state changes, React re-renders the component.

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

//! What is Optional Chaining (?.)?
// ----------------------------------------
//^  Optional chaining safely checks whether something exists before using it. 
//^  If it doesn’t exist, it returns undefined instead of throwing an error. 

//! 5 Difference between props and state.
//                  State                                            |       Props                                                   |
// | --------------------------------------------------------------- | ------------------------------------------------------------- |
// | State is **internal data** of a component.            | Props are **data passed from a parent to a child**.                         
// | State is managed by the component itself.            | Props are passed/controlled by the parent.                                |                                    
// | State can be changed.                                                     | Props are **read-only** for the receiving component. |                       
// | State is updated using `setState()` or a state setter like `setCount()`. | Props are passed through component attributes.        |
// | Changing state causes the component to render with the new state.   | A change in props can cause the receiving component to render with the new props. |
// | Used for **dynamic data** such as counters, forms, toggles, etc.          | Used to **pass data/configuration** to reusable components.        |

//! 6 What is Virtual DOM? 
//^ It is  a light weight copy of real DOM. - React usages virtual Dom to improves its performance instated of updating the actual real dom. 
//^ - React first update the virtual Dom and figure out what changed and than only updated is patches to the real dom.
//^ ❌ "Virtual DOM is a complete copy of the Real DOM."
//^✅Virtual DOM is an in-memory representation of the UI that React uses during reconciliation to determine the necessary updates to the actual DOM.

//! 1. Actual DOM :
//^ The Actual DOM (Real DOM) is the actual tree of elements maintained by the browser.

//! 2. Virtual DOM :
//^ The Virtual DOM is an in-memory representation of the UI used by React during its update process.

//! 7 What is useState()? 
// **Hooks**
//----------------------------
//^ - **Hooks are special functions provided by React that allow functional components to use React features such
//^  as state, effects, context, etc.** Hooks were introduced in **React 16.8**.

//! Use State :  
// -------------------
//^ -->  useState is a react hook which helps function base component to make it form stateless to stateful.
//^  It accepts one argument that is called initial value and it returns an array. which consists two value.
//^  First value is the variable which holds the initial value. And 2nd value is the updater function which
//^  help to update initial value. It is known as settle function dispature function.

//! 8 What is useEffect()? 
//! useEffect : -------------
// ---------------
//^ useEffect is a react hook which helps us to handle side effect in our react application side-effect.
//^ like fetching the data from the API removing event lishner updating DOM etc..
//^ This hook can also be used for checking the phase of funtion based component.
//& useEffect is accept two argument first argument is the callback function which we wants to
//& execute and second arugunment in the dependency array. 

//! 9 What is the dependency array in useEffect? 
//^ The dependency array in useEffect tells React when to execute the effect. 
//^ An empty array runs the effect once after the initial render, while including dependencies makes the effect run whenever
//^ those values change. If no dependency array is provided, the effect runs after every render.
// useEffect(() => {
  // side effect
// }, [dependencies]);

//! 10 What is conditional rendering? 
//^ Conditional rendering means displaying different UI elements based on a condition.
//^ Condition true → Show one UI
//? Condition false → Show another UI
// function App() {
//     let isLogin = true;
//  if (isLogin) {
//         return <h1>Welcome Tarun</h1>;
//     } else {
//         return <h1>Please Login</h1>;
//     }
// }



//! 11 How do you render a list in React? 
//^ List rendering is the process of displaying multiple items from an array or collection 
//^ in the React UI, usually using the map() method.
// function App() {
//     let users = ["Tarun", "Rahul", "Amit"];


//     return (
//         <ul>
//             {users.map((user) => (
//                 <li key={user}>{user}</li>
//             ))}
//         </ul>
//     );
// }

//! 12 Why is the key prop important? 
//^ A key are used to uniquely identify the element in the list. It helps React identify which items have been added, removed, or changed.
// const users = [
//   { id: 1, name: "Tarun" },
//   { id: 2, name: "Rahul" }
// ];
// function App() {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }     

//! 13 How do you call an API in React? 
//^ In React, we commonly call an API using fetch() or Axios, usually inside the useEffect() hook when we want to
//^  fetch data when a component loads.
// import { useEffect, useState } from "react";
// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default Users;

//^ How it works
// useEffect() runs when the component loads.
// fetch() sends a request to the API.
// response.json() converts the response into JavaScript data.
// setUsers(data) stores the data in state.
// React re-renders and displays the users.

//&==============================================================================================================================================================================================================================
// Phases of component or Life Cycle 
// -------------------------------------------
// ->React lifecycle means the different stages a component goes through. 
// There are three phases of component :
// 1. Mounting phase
// 2. Updation phase 
// 3. Unmounting phase 

// (i) Mounting Phase :
// ----------------------------
//  whenever any componet is renders first time on UI this Phase is called Mountung phase.

// (ii) Updation phase : 
// ---------------------------
// when ever any state of props of a compomnent changes is an component gets re-rendered this phase comes under updation phase

// (iii) Unmounting phase :
// ------------------------------
//  whenever the component is removed from the UI this phase is known as Unmounting phase. 
// decides this 3 main phase there is one more phase that is error handling.

//  Error Handing : 
// ---------------------
// In react life cycle is the process where react catchs the errror in component and prevents the entire app form crassing.
// React introduce this feature in react 16 with error boundries.

// based of adding CSS in react :
// 1. inline css means writing styles directly on a jsx element using the style attribute as a javascript object 
// in inline css properties are return in cammel case and the values are return mostly in string. 

// 2. internal CSS : it is defined inside the same file or component using a style tag in jsx it is used for small components where css not reused everywhere.

// 3. External CSS : in external css we have to create seprate CSS file with dot css extention and then we have to import the css in over component.

// css module allow hook to scope locally to a component avoiding global conflict each class gets a unique generated name in beaing react project multiple developers can styl component without overriding global css.

// Context API :

// we can not share the data directly to pass the data directly to middle component we have used content API. 
// Steps to create the context API 
// 1. Create Context
// 2. Context Provider and Providing values 
// 3. Use Context 


 // Use Reducer :

// It is a react Hook which is used to handle state logic.
// It accepts two arguments 1st argument is the reducer function and 2nd argument is the initial value.
 
// 1. Reducer function : It is the function that decides how state changes. It It accept two argument 1st argu is the current state and 2nd argu is the action and it return a new updated state.
 
// 2. Initial state : It is also known as initial value that oue state should hold. It returns an array which consists two value 1 value is the variable which state holds the comments and 2nd value is the function which is known as this pacher function.


// useRef :

//  useRef is a react Hook which persists value or it is used to access Dom Elements without causing a component re-rendering. useRef is a built-in React Hook that returns a mutable reference object whose .current property holds a persisted value across renders.
// 1. Accessing and Manipulating DOM Elements Directly : Focusing an input, scrolling to a section, measuring element dimensions, or playing/pausing media.
// 2. Storing Mutable Values Without Causing Re-renders : Unlike useState, updating ref.current does not trigger a component re-render.


//                                                             Difference                                                     
// |                  `useRef`                                   | `useState`                      |
// | -------------------------------------------- | ------------------------------- |
// | Stores a value in `.current`               | Stores state value              |
// | Changing `.current` does **not** re-render | Updating state causes re-render |
// | Commonly used for DOM references     | Used for data that affects UI   |




//! 14 What is difference between Controlled component and Uncontrolled component ?
//^ Controlled component A component where the form input element's value is driven and controlled by React state (useState). 
//^ 1. The input's `value` attribute is bound to a state variable.
//^ 2. Any keystroke or user input triggers an `onChange` event handler to update that state.
// import { useState } from "react";
// function App() {
//     const [name, setName] = useState("");
//     return (
//         <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//         />
//     );
// }


//^ Uncontrolled component A component where the form input element manages its own internal state using the browser's DOM.
//^ React does not track every keystroke. Instead, React pulls the current value directly from the DOM on demand (e.g., when the user clicks "Submit") using a useRef reference.
// import { useRef } from "react";
// function App() {
//     const inputRef = useRef();
//     function handleSubmit(e) {
//         e.preventDefault();
//  console.log(inputRef.current.value);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input ref={inputRef} />


//             <button type="submit">Submit</button>
//         </form>
//     );
// }

//^                                     Difference 
// |              Controlled                     |     Uncontrolled                 |
// | ----------------------------------- - | ---------------------------- |
// | React controls the value       | DOM controls the value       |
// | Uses `useState()`                        | Usually uses `useRef()`      |
// | Value is stored in React state | Value is stored in the DOM   |
// | Every keystroke `onChange`  | On demand / form submit |
// | React Recommended           | Useful for edge cases & file uploads |

//&=============================================================================================================================================================================================================================
// Routing in react is the process of showing different components on different url. without reloading the page 
// advantages of routing --------------
// - no page reload 
// - faster navigation
// - single page application support 
// - better user experience
// - easy component base routing 

// types :
//  there are two types of routing :
// 1. Client side routing 
// 2. Server side routing 

// 1. Client side routing : Client side routing is the routing process where every URL changes without reloading the page and the browser renders the components dynamically.

// 2. Server side routing : server side routing is thr process where every URL request is sent to the server and the server returns a new html page for each rout.

// React router :
// react router is a libary that manages routing the logic in react application and decides which component have to show base on the URL.

// React routwe DOM is a package built on top of the react router that is used specifically for the web applications


// - Routing

//     - Browser Router
//         - react router library (older approach)
//         - enables client side routing in react applications.
//         - Uses html5 history api (pushState, popState, replaceState)
//         - small / simple apps

//     - Routes
//         - Routes is the container component that hold multiple child component and renders the component which matches with the URL.

//     - Route
//         - Route is a component that maps specific url path to a specific react component.

//         - Commands
//             - to install the 3rd party application/dependency which is react router-dom
//               npm i react-router-dom

//             * -> wild card route (used for all)

//     - path
//         - path defines the url pattern that must be matched in order for a route to be render

//     - element
//     - element specifies the react component that should be displayed when the path matches the url

//     - difference between anchor tag (a) and Link tag
//         - Link is a react router higher order component which is used for navigation among components without reloading the page

//         - while anchor is normal html tag used for navigation but it reloads the entire page
// - Create Browser Router
//         - it is a modern api, introduced in the React version 6.4
//         - it let's you to define all your routes, loader, action and errors in single configuration file
//         - it is a part of data router api
//         - it helps you to create a router object that defines what to render for each url and how to fetch data before rendering.

// - Memoization
//     - it is a code optimization technique that makes application more faster and efficient.
//     - It does this by storing computational result in cache and retrieving the same information from the cache.
//     - The next time it's needed, instead of computing it again

//     - Types of Memoization

//         1. React.memo
//             - it is a higher order component that memoizes a react component preventing unnecessary re-renders, if it's prop or state have not changed

//         2. UseMemo
//             - It is a react hook that memoizes the result of a computation, so it is not recalculated on every render.

//         3. UseCallback
//             - it is a react hook that memoizes a function ensuring the same function reference is used until its dependency changes

//^---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 6. REST API & Git 
// 1 What is an API?
// 2 What is a REST API? 
// 3 What is JSON? 
// 4 Difference between GET and POST. 
// 5 What are common HTTP status codes: 200, 201, 400, 401, 404 and 500? 
// 6 What is Git? 
// 7 What is GitHub? 
// 8 Difference between Git and GitHub. 
// 9 Explain git add, git commit, git push and git pull. 
// 10 What is a Git branch? 

//^---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 7. Practical/Coding Questions 
// 1 Create a button using HTML and CSS. 
// 2 Reverse a string using JavaScript. 
// 3 Find the largest number in an array. 
// 4 Remove duplicate values from an array. 
// 5 Use map(), filter() and reduce() with examples. 
// 6 Create a React counter using useState. 
// 7 Create a React form and handle input values. 
// 8 Fetch API data and display it in React. 
// 9 Create a simple search/filter functionality. 

//^------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//* 8. Project Questions – Very Important 
// 1 Explain your project. 
// 2 What technologies did you use? 
// 3 What was your role in the project? 
// 4 What challenges did you face? 
// 5 How did you make the website responsive? 
// 6 How did you handle API data? 
// 7 Why did you choose React? 
// 8 What would you improve in the project?