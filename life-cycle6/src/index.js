import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={favoritecolor:"red"}
  }
  shouldComponentUpdate(){
    // return false;    //when return false component not updates
    return true;    //when return true component gets updates
  }
  changeColor=()=>{
    this.setState({favoritecolor:"blue"});
  }
  render(){
    return(
      <div>
        <h1>My favorite color is {this.state.favoritecolor}.</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
