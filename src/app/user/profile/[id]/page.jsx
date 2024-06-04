import React from 'react'

const myProfile = ({params}) => {
    console.log(params);
  return (
    <div>myProfile {params.id}</div> // display id on screen
  )
}

export default myProfile