import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter:10
}
//here lot of duplication of code is seen so we can use multiple reducer
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.val}
        case 'decrement':
            return { ...state,firstCounter: state.firstCounter - action.val}
        case 'increment2':
            return { ...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ...state,secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerComplexObj() {

    const  [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count - {count.firstCounter}</div>
        <button onClick={()=> dispatch({type:'increment',val: 1})}>Increment</button>
        <button onClick={()=> dispatch({type:'decrement',val: 1})}>Decrement</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
        <div>
            <div>Count - {count.secondCounter}</div>
            <button onClick={()=> dispatch({type:'increment2',value: 2})}>Increment 2</button>
            <button onClick={()=> dispatch({type:'decrement2',value: 2})}>Decrement 2</button>
        </div>
    </div>
  )
}

export default ReducerComplexObj