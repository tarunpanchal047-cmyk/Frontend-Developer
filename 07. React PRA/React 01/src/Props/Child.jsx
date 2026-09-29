

const Child = (props) => {
    // console.log(props)

    let {str,arr,obj} = props
  return (
    <div>
        
      <h1>Child</h1>
      <h1>String : {str}</h1>
      <h1>Array : {arr[0]}</h1>
      <h1>Object : {obj.id} {obj.objname} {obj.sal}</h1>
    </div>
  )
}

export default Child
