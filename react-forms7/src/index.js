import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function MyForm(){
  const [myCar,setMyCar]=useState("Volvo");

  const handleChange=(event)=>{
    setMyCar(event.target.value);
  }

  return(
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
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
