import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState,useEffect,useRef} from 'react';

function App(){
  const [inputValue,setInputValue]=useState("");
  const count=useRef(0);

  useEffect(()=>{
    count.current=count.current+1;
  });

  return(
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
      <h1>Render Count : {count.current}.</h1>
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
