import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function Football(){
  const shoot=(a,b)=>{
    alert(b.type);
  }

  return <button type="butto" onClick={(event)=> shoot("Goooal!",event)}>Take the shot!</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Football/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
