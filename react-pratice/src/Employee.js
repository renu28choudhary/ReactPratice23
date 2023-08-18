import React from 'react'

function Employee(props) {
  const {item}= props
  return (
    <h3> I am {item.emplyoeeName}. I am  { item.role}</h3>
  )
}

export default Employee