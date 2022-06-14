import React, { useEffect, useState } from 'react'

function UseEffectWithIncorrectDependency() {
    const [count,setCount] = useState(0)

    const tick = () =>{
        setCount(count+1)
    }

    //here we initilize setInterval func once since we have empty arry in depenency but what react does is it will call this function once
    //but will diplay the value of count once as we have told the react. It is not waiting for the count value to change hence the counter does not incement in the UI
    // useEffect(()=>{
    //     const interval = setInterval(tick,1000)

    //     return ()=>{
    //         clearInterval(interval)
    //     }
    // },[])

    //now It waits for count value to change as soon as it changes it will start
    useEffect(()=>{
        const interval = setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])
    
  return (
    <div>
        {count}
    </div>
  )
}

export default UseEffectWithIncorrectDependency