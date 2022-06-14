import React, { useContext, useReducer } from 'react';
import "../components/App.css";
import ComponentA from '../hooks/Context/ComponentA';
import ComponentA1 from '../hooks/Reducer/Context/ComponentA';
import ComponentC1 from '../hooks/Reducer/Context/componentC';
import ComponentF from '../hooks/Reducer/Context/ComponentF';
import DataFetching from '../hooks/DataFetching';
import GetById from '../hooks/GetById';
import HookCounterTwo from '../hooks/HookCounterTwo';
import HookFunction from '../hooks/HookFunction';
import MultipleReducer from '../hooks/Reducer/MultipleReducer';
import ReducerComplexObj from '../hooks/Reducer/ReducerComplexObj';
import UseEffectAFterRender from '../hooks/UseEffectAFterRender';
import UseEffectCleanUp from '../hooks/UseEffectCleanUp';
import UseEffectRunOnce from '../hooks/UseEffectRunOnce';
import UseEffectWithConditionalRender from '../hooks/UseEffectWithConditionalRender';
import UseEffectWithIncorrectDependency from '../hooks/UseEffectWithIncorrectDependency';
import UseStateArray from '../hooks/UseStateArray';
import UseStateObject from '../hooks/UseStateObject';
import Form from './Form';
import LifecycleA from './LifecycleA';
import ListRendering from './ListRendering';
import ParentComponent from './ParentComponent';
import Tables from './Tables';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

//useContext with reducers inorder to set global variable
const initialCount = 0
const reducer = (state,action) =>{
  switch(action){
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
        return initialCount
    default:
        return state
  }
}
export const CountContext = React.createContext()

function App() {

  const [count,dispatch] = useReducer(reducer,initialCount)

  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <ListRendering /> */}

      {/* <Form /> */}

      {/* <LifecycleA /> */}

      {/* React Fragments will add extra div during render in order to remove the div then use react fragments */}
      {/* <Tables /> */}

      {/* <HookFunction /> */}
      {/* <HookCounterTwo/> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray/> */}
      {/* <UseEffectAFterRender/> */}
      {/* <UseEffectWithConditionalRender /> */}
      {/* <UseEffectRunOnce/> */}
      {/* <UseEffectCleanUp/> */}
      {/* <UseEffectWithIncorrectDependency/> */}

      {/* Data Fetching with Hooks */}
      {/* <DataFetching/> */}
      {/* <GetById/> */}

      {/* context by hooks */}
      {/* <UserContext.Provider value={'Shreyas'}>
        <ChannelContext.Provider value={'CodeTesting'}>
          <ComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* Reducer */}
      {/* <ReducerComplexObj/> */}
      {/* <MultipleReducer/> */}

      {/* Contect with Reducer */}
      <div>
        Count - {count}
        <CountContext.Provider value={{countState: count,countDispatch: dispatch}}>
            <ComponentA1/>
            <ComponentC1/>
            <ComponentF/>
        </CountContext.Provider>
        
      </div>
      
      
    </div>
  );
}

export default App;
