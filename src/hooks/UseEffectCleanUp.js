import React, { useState } from 'react'
import UseEffectRunOnce from './UseEffectRunOnce'

function UseEffectCleanUp() {
    const [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
        { display? <UseEffectRunOnce/>:null }
    </div>
  )
}

export default UseEffectCleanUp