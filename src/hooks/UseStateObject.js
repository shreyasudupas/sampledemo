import React,{useState} from 'react'

function UseStateObject() {
    const [name,setName] = useState({firstName:'',lastName:''}) 
  return (
    <div>
        <input
        type='text'
        value={name.firstName}
        onChange={(e)=> setName({...name,firstName:e.target.value})}
        />
        <input
        type='text'
        value={name.lastName}
        onChange={(e)=> setName({...name,lastName: e.target.value})}
        />
        <div>First name: {name.firstName}</div>
        <div>Last name: {name.lastName}</div>
    </div>
  )
}

export default UseStateObject