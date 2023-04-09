import React from 'react'

const ChailComponent = (props) => {
    // let {name} = props;
    let {name, age, id} = props.details;
    let {arr}= props;
    console.log(arr);
  return ( 
    <div>ChailComponent
        <p>{name}</p>
        <p>{age}</p>
        <p>{id}</p>
        {
            arr.map((e) => {
                return(
                    <div key={e.id}>
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.id}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ChailComponent