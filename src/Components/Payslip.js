import TaxCalculator from "./TaxCalculator";

function Payslip(props){
    
    return(

        <>

        <h1>Payslip</h1>
        <br/>
        <h2>Name: <b>{props.name}</b></h2>
        <h2>Department: <b>{props.department}</b></h2>
        <h2>Address: <b>{props.address}</b></h2>
        <h2>Salary: £<b>{props.salary}</b></h2>
        <TaxCalculator {...props}/>
        </>
        
    );
}

export default Payslip;