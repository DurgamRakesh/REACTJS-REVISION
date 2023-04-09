import React from 'react'

const chailComponent = (props) => {
  //getting props as array of objects
  let arr = [...props.details]
  console.log(arr)
  //getting props as string
  console.log(props.val);
  //getting props as object
  const {name,loc} = props.obj
  console.log(name,loc);
  return (
    <div>chailComponent
      {
        arr.map((e,i) => {
          const {name,email} = e
          return(
            <div key={i}>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default chailComponent