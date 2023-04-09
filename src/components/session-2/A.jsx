import React from 'react'

const A = ({fun}) => {
    console.log('a render...');
  return (
    <></>
  )
}

export default React.memo(A)