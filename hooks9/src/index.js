import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState,useEffect} from 'react';

function Counter(){
  const [count,setCount]=useState(0);
  const [calculation,setCalculation]=useState(0);

  useEffect(()=>{
    setCalculation(()=> count*2);
  },[count]);

  return(
    <>
      <p>Count : {count}</p>
      <button onClick={()=> setCount((c)=> c+1)}>+</button>
      <p>Calculation : {calculation}</p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
