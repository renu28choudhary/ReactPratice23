import React,{ useState} from 'react'


function AddNames(props) {
  const {skills} = props
  const [names,setNAmes]= useState('')
 // const [list, setList] = useState(skills)
 //const [list, setList] = useState()
 const [show,setShow]=useState(false)
  //let newList=[]

   const handleAddition = (e)=>{
   //  newList = list.concat({ names });

   // setList(newList);
   setShow(true)
  }
  const handleNameChange=e=>{
    setNAmes(e.target.value)
  }
  // const showNewList=newList.map((item) => (
  //   <div key={item.id}>{item.name}</div>
  // ))
  return (
    <div>
    <button onClick={handleAddition}>+</button>
      <input type="text" value={names}
    onChange={handleNameChange}></input>
        {//showNewList
        }
        {names}
      </div>
  )
}

export default AddNames