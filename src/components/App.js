import React from 'react';
import "../components/App.css";
import ListRendering from './ListRendering';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      <ListRendering />
    </div>
  );
}

export default App;
