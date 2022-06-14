import React, { useEffect, useState } from 'react'

function UseEffectRunOnce() {
    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    //when empty dependence is sent then it is called only once
    //THis is equivalent to componentDidMount in class component
    useEffect(()=>{
        console.log('UseEffect Called')
        //adds the event listner and then never added again when re rendering the component
        window.addEventListener('mousemove',logMousePosition)

        //add a function for cleanUp operation i.e coumponentWillUnMount
        return () => {
            console.log('UseEffect Unmount')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    const logMousePosition = (e) => {
        console.log('mouse event called')
        setX(e.clientX)
        setY(e.clientY)
    }
  return (
    <div>
        Hooks: X - {X} Y - {Y}
    </div>
  )
}

export default UseEffectRunOnce