import React from 'react';
import ReactDOM from 'react-dom';
import  Item  from './Item';

function App() {
  return (
  <div className= "App">
    <header className="App-header">
      <div></div>
    </header>
    <Item/>
  </div>  
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
