import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount]=useState(0);

  function incrementCount(){
    setCount(count+1);
  }

  function decrementCount(){
    if(count>0){
      setCount(count-1);
    }
  }

  function reset(){
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <span className="counter-display">{count}</span>
        <div className="button-container">
          <button className="counter-btn" onClick={incrementCount}>+</button>
          <button className="counter-btn" onClick={decrementCount}>-</button>
        </div>
        <button className="reset-btn" onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

export default App;
