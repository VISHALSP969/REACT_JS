import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState,useEffect,useRef} from 'react';

function App(){
  const [inputValue,setINputValue]=useState("");
  const previousInputValue=useRef("");

  useEffect(()=>{
    previousInputValue.current=inputValue;
  },[inputValue]);

  return(
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=>setINputValue(e.target.value)}
      />
      <h2>Current Value : {inputValue}</h2>
      <h2>Previous Value : {previousInputValue.current}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
