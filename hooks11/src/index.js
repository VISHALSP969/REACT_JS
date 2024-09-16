import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function Component1(){
  const [user,setUser]=useState("Jesse Hall");

  return(
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user}/>
    </>
  );
}

function Component2({user}){
  return(
    <>
      <h1>Component2</h1>
      <Component3 user={user}/>
    </>
  );
}

function Component3({user}){
  return(
    <>
      <h1>Component3</h1>
      <Component4 user={user}/>
    </>
  );
}

function Component4({user}){
  return(
    <>
      <h1>Component4</h1>
      <Component5 user={user}/>
    </>
  );
}

function Component5({user}){
  return(
    <>
      <h1>Component5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Component1/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
