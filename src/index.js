import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import Header from './header';
// import Button from './Button';

import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Item />
      {/* <Button shadow="true" border="round"> */}
        {/* {" "} */}
        {/* Shop{" "} */}
      {/* </Button> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
