import React,{ useEffect, useState } from 'react'

function UseEffectAFterRender() {
    const [count,setCount] = useState(0) 

    //called every time a component is rendered 
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
        <button onClick={()=> setCount(prevCount=>prevCount + 1)}>Cliked {count} times</button>
    </div>
  )
}

export default UseEffectAFterRender