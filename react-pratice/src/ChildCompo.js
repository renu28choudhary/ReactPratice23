import React from 'react'

function ChildCompo(props) {
  const {greetHandler}= props
  return (
    <div>
      <button onClick={()=>greetHandler("child")}>Greet Parent</button>
    </div>
  )
}

export default ChildCompo