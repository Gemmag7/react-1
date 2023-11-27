import TaxCalculator from "./TaxCalculator";

function Payslip(props){
    
    return(

        <>

        <h1>Payslip</h1>
        <br/>
        <h1>Name: <b>{props.name}</b></h1>
        <h1>Department: <b>{props.department}</b></h1>
        <h1>Address: <b>{props.address}</b></h1>
        <h1>Salary: £<b>{props.salary}</b></h1>
        <TaxCalculator {...props}/>
        </>
        
    );
}

export default Payslip;