//  //! <BrowserRouter> :
//  ● Inbuilt component in react-router-dom  
//  ● It will connect the URL of our application to the URL of the browser.
//  ● It is a component that should wrap your entire application and provide the history and location to your components. 
//  The history object keeps track of the browser’s history and location object contains information about the current URL. 
 
 //! Routes : 
  // ● It will act as the outer boundary for individual route’s.  
  // ● It is a component that wraps multiple Route components and renders a Route that matches the current URL . 
  // ● Inside Routes components, we should use only Route Components. 
  
  //! Route : 
  // ● It will specify which element has to render into a component based on path attribute. 
  // ● It will have 2 attributes 
  //  ○ Path: It contains the URL of the page where you to visit 
  //  ○ Element : It displays the content based on URL. 
  //   ● Syntax:  <Route path=”Path” element=”<ComponentName>”> 
  //   ● Basically, we inform the browser if this is the path address then render this element(component).  

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Home"
import Create from "./Create"
import Read from "./Read"
import UpDate from './UpDate'


const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<UpDate/>}/>

       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App
