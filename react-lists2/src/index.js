import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function Car(props){
  return <li>I am a {props.brand}</li>
}

function Garage(){
  const cars=[
    {id:1,brand:"Ford"},
    {id:2,band:"BMW"},
    {id:3,brand:"Audi"}
  ];
  return(
    <>
      <h1>Who lives in my Garage?</h1>
      <ul>
        {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Garage/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
