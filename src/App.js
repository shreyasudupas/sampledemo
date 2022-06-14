import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

      {/* This is for state */}
      {/* <Message/> */}

      {/* This is function call from Function component */}
      {/* <FunctionClick /> */}

      {/* <EventBind/> */}

      <Form />

      {/* This is for props from parent to child */}
     {/* <Greet name="shreyas" surname="udupa"/>
     <Greet name = "jyothi" surname="udupa"/> */}
     {/* <Welcome name="shreyas"/>
     <Welcome name="jyothi"/> */}
     {/* <Hello/> */}
    </div>
  );
}

export default App;
