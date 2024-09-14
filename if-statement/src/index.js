import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function MissedGoal(){
  return <h1>MISSED!</h1>
}

function MadeGoal(){
  return<h1>GOAL!</h1>
}

function Goal(props){
  if(props.isGoal){
    return <MadeGoal/>
  }
  return <MissedGoal/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Goal isGoal={false}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
