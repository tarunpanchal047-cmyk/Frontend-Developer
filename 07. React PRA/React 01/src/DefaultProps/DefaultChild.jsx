

const DefaultChild = (props) => {
    // console.log(props)
    let {str}= props
  return (
    <>
      <h1>DefaultChild</h1>
      <h1>DefaultChild :  {str}</h1>
      <h1>{str||"Defaultprops"}</h1>
    </>
  )
}

export default DefaultChild
