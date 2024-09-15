import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function FavoriteColor(){
  const [color,setColor]=useState("red");

  return(
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={()=>setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={()=> setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={()=> setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteColor/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
