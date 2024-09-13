import Car from "./Car";

function Garage(){
    const carInfo={name:"Ford",model:"Mustang"};
    
    return(
        <div>
            <h1>Who lives in my Garage?</h1>
            <Car brand={carInfo}/>
        </div>
    );
}

export default Garage;