//! 2. Function-based Components (Stateless Components) :
// -----------------------------
//^  Function-based components are created using JavaScript functions. 
//^  ● They do not have state in older React (before hooks). 
//^  ● They were used only for UI presentation without logic. 
//^  ● Known as Stateless Components (old name). 

//! Fragment : 
// --------------------------------
//^  A Fragment in react is used to multiple elements without adding extra node in the DOM tree. Fragment help us to avoids extra div wrapper. There are two ways to creating fragment.
//^  ----> Way of writing fragment
//^         1. <Fragment></Fragment>
//^         2. <> </>


import React, { Fragment } from 'react'

const Fbc = () => {
    return(
        <Fragment>
            <h1>Function based components</h1>
            <h2>Function based components</h2>
            <h3>Function based components</h3>
        </Fragment>
        )
}

export default Fbc