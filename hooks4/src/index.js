import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function Car(){
  const [brand,setBrand]=useState("Ford");
  const [model,setModel]=useState("Mustang");
  const [year,setyear]=useState(1964);
  const [color,setColor]=useState("red");

  return(
    <>
      <h1>My {brand}</h1>
      <p>It is a {color} {model} from{year}.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Car/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
