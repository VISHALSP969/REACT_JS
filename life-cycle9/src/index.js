import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={favoritecolor:"red"};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoritecolor:"blue"})
    },5000);
  }
  render(){
    return <h1>My favorite color is {this.state.favoritecolor}.</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
