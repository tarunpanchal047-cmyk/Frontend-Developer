import { useState } from 'react'

const ConditionalRendering2 = () => {

  let data = ['notification1', "notification2", "notification3"]
let [message, setmessage] = useState(data)




  return (
    <>
      Notification

      {/* //! Ternary Operator */}
      {/* { (message.length>1) ? <sup>{message.length}</sup> : "" } */}

      {/* //! Short Circuit Operator */}
      { (message.length>1) && <sup>{message.length}</sup> }
    </>
  )
}

export default ConditionalRendering2
