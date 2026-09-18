//!  Controlled Component : -------------
// ---------------
//^ A Controlled Component is a component in which the input element get their value from react state and any changes in the input 
//^ is handled thorugh even handler like on change.


//! Controlled Forms :
//  ● If a state is used to maintain or control the data entered into an input field / form, such a component is said to be a controlled component.
//  ● In controlled components,  we have to do three important things 
// a) State variable 
// b)Value Attribute 
// c) onChange Event 
//^ Steps: 
// 1. Initialize the state Variable. 
// 2. Add name and value attribute to the input or form elements. 
// 3. State Update (onChange Event) 
// 4. Add onSubmit Event. Task on Controlled Forms  





import { useState } from 'react'

const Control = () => {
    let [formData,setFormData] = useState({
      userName:"",
      password:"",
      email:""
    })
    function handleSubmit(e){
        e.preventDefault()
        console.log("form Submitted")
    }
    function handleChange(e){
        // console.log(e.target.value)
        let [name,value] = e.target
        setFormData({...formData , [name]:value})
        console.log(formData)
        console.log("change")
    }

  return (
    <div>
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={formData.userName} onChange={handleChange} name='userName'/>
        <input type='text' value={formData.password} onChange={handleChange} name='password'/>
        <input type='text' value={formData.email} onChange={handleChange} name='email'/>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Control
