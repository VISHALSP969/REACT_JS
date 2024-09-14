import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

function MyForm(){
  const [textarea,setTextarea]=useState("The content of a textarea goes in the value attribute");

  const handleChange=(event)=>{
    setTextarea(event.target.value);
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange}></textarea>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyForm/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
