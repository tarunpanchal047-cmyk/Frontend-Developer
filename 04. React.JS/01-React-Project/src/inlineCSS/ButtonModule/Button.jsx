//! 3.CSS Module :
//---------------------------
//^ In this we have to create the modular css for each and every component , it will be like component based css . 
//!  Button.module.css
//   .btn {  
//      background-color: green;  
//       color: white;  
//        padding: 10px; 
//       } 
      
//!       Button.jsx 
//       import styles from "./Button.module.css";  
//       function Button() {  
//          return <button className={styles.btn}>Click Me</button>; 
//         }   
  

//! 4.Tailwind css :
//---------------------------
//^  Tailwind CSS is a utility-first CSS framework used to style UI directly in HTML/JSX using predefined class names. 
//^  Instead of writing custom CSS, we apply classes like text-red-500, p-4, flex, etc. 
 
//  .function App() {  
//    return (    
//      <h1 className="text-red-500 text-2xl font-bold"> 
//            Hello React   
//              </h1>   
//              ); 
//             }  





import style from './Button.module.css'

const Button = () => {
  return (
    <div className={style.container}>
<form>
<input type='text' placeholder='Username'/>
<input type='password' placeholder='Password'/>
<button id={style.btn}>Login</button>


</form>



    </div>
  )
}

export default Button