import React,{ useEffect, useState } from 'react'

function UseEffectWithConditionalRender() {
    const [count,setCount] = useState(0) 
    const [name,setName] = useState('')

    //called every time a component is rendered even when the input name is entered, this will cause performance issue
    // useEffect(()=>{
    //     console.log('UseEffect - Document called')
    //     document.title = `You clicked ${count} times`
    // })

    //add a condition here so the logic is not executed
    //This is equivalent to componentDidUpdate in class component
    useEffect(()=>{
        console.log('UseEffect - Document called')
        document.title = `You clicked ${count} times`
    },[count])

  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={()=> setCount(prevCount=>prevCount + 1)}>Cliked {count} times</button>
    </div>
  )
}

export default UseEffectWithConditionalRender