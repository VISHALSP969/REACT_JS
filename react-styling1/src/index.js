import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function Header(){
  return <h1 style={{color:"red",backgroundColor:"yellow",padding:"20px",fontfamily:"Sans-Serif"}}>Hello World!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
