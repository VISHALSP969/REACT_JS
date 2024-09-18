import React,{useState} from 'react';
import './style.css';

function BMICalculator(){
    //State variables to store user inputs and results
    const [height,setHeight]=useState(null);
    const [weight,setWeight]=useState(null);
    const [bmi,setBmi]=useState(null);
    const [message,setMessage]=useState("");

    //Function to calculate BMI
    const calculateBMI=()=>{
        if(weight&&height){
            //Convert height to meters and calculate BMI
            const heightInMeters=parseFloat(height)/100;
            const calculatedBMI=(parseFloat(weight)/(heightInMeters*heightInMeters)).toFixed(2);

            setBmi(calculatedBMI);

            //Determine the BMI category 
            if(calculatedBMI<18.5){
                setMessage("Underweight");
            } else if(calculatedBMI>=18.5 &&calculatedBMI<24.9){
                setMessage("Normal weight");
            } else if(calculatedBMI>=25 && calculatedBMI<29.9){
                setMessage("Overweight");
            } else{
                setMessage("Obese");
            }
        } 
        else {
            setMessage("Please enter valide values for weight and height.");
        }
    };

    //Function to reset the form
    const resetForm=()=>{
        setWeight('');
        setHeight('');
        setBmi('');
        setMessage('');
    };

    return(
        <dv className="bmi-calculator">
            <h1>BMI Calculator</h1>
            <div className="input-group">
                <input
                    type="number"
                    value={weight}
                    placeholder="Weight (kg)"
                    onChange={(e)=>setWeight(e.target.value)}
                /><br/>
                <input
                    type="number"
                    value={height}
                    placeholder="Height (cm)"
                    onChange={(e)=>setHeight(e.target.value)}
                />
            </div><br/>
            <button onClick={calculateBMI} className='calculate-button'>Calculate BMI</button><br/>
            <button onClick={resetForm} className='reset-button'>RESET</button>
            {bmi && (
                <div className='result'>
                    <h2>Your BMI : {bmi}</h2>
                    <h3>{message}</h3>
                </div>
            )}
        </dv>
    );
}

export default BMICalculator;