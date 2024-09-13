import Car from "./Car";

function Garage(){
    const carName="Ford";
    return(
        <div>
            <h1>Who lives in my Garage?</h1>
            <Car brand={carName}/>
        </div>
    );
}

export default Garage;