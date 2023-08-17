import React from 'react'

function HelloWorld(props){
  const {greeting} = props
  return(
    <div>{greeting} World</div>
  )
}
export default HelloWorld