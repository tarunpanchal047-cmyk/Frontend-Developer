import React from 'react'
import DefaultChild from './DefaultChild'



const DefaultParent = () => {

    let str = "My name is Tarun"

  return (
    <>
      <h1>DefaultParent</h1>
      <DefaultChild str={str}/>
      <DefaultChild/>
    </>
  )
}

export default DefaultParent
