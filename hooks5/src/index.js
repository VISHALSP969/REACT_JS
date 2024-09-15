import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function Car(){
  const [car,setCar]=useState({
    brand:"Ford",
    model:"Mustang",
    year:1964,
    color:"red"
  });

  return(
    <>
      <h1>My {car.brand}</h1>
      <p>It is a  {car.color} {car.model} from {car.year}.</p>
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
