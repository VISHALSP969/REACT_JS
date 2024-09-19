import React, { useState } from "react";
import './style.css';

function Calculator() {
  const [input, setInput] = useState("");

  //Function to handle input when a button is clicked
  const handleClick = (value) => {
    if(input==="Error"){
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  //Function to calculate the result
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  //Function to reset the calculator
  const clear = () => {
    setInput("");
  };

  //Function to handle backspace
  const handleBackspace=()=>{
    setInput(input.slice(0,-1));
  }

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readonly />
      </div>
      <div className="keypad">
        <div className="clear-btns">
        <button onClick={clear} className="clear-all">AC</button><br/>
        <button onClick={handleBackspace} className="clear">C</button>
        </div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")} className="operator">/</button>
        <br/>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")} className="operator">*</button>
        <br/>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")} className="operator">-</button>
        <br/>

        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculate} className="equal">=</button>
        <button onClick={() => handleClick("+")} className="operator">+</button>

      </div>
    </div>
  );
}

export default Calculator;
