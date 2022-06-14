import React from 'react';
import "../components/App.css";
import HookCounterTwo from '../hooks/HookCounterTwo';
import HookFunction from '../hooks/HookFunction';
import UseStateArray from '../hooks/UseStateArray';
import UseStateObject from '../hooks/UseStateObject';
import Form from './Form';
import LifecycleA from './LifecycleA';
import ListRendering from './ListRendering';
import ParentComponent from './ParentComponent';
import Tables from './Tables';

function App() {
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
      <UseStateArray/>
    </div>
  );
}

export default App;
