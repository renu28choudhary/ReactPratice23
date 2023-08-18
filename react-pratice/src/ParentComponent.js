import React, { Component } from 'react'
import ChildCompo from './ChildCompo'
 class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
       parentName: 'Renu'
    }
  }

  greetParent=(childName)=>{
    alert(`Hello ${this.state.parentName}From ${childName}`)
  }

  render() {
    return (
      <div>ParentComponent
        <ChildCompo greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent