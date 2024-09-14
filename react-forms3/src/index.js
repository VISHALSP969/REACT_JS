import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function MyForm(){
  const [name,setName]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`The name you entered was : ${name}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Enter your name : 
        <input
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
      </label>
      <input type="submit" />
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
