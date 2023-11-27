

function TaxCalculator(props){
    let result =0
    let tax = 0
    if (props.salary <1000){
        tax = 0;
    }
    else{
        if(props.salary <2000){
        tax = props.salary * 0.15
        }
        else{
            if(props.salary <3000){
                tax = props.salary * 0.21
            }else{
                tax = props.salary * 0.31
            }
        }
    }

   
    switch(props.department){
        case "IT": result = props.salary * 2.5 /100; break;
        case "HR": result =props.salary * 1.5/100; break;
        case "Sales": result =props.salary * 1/100; break;
        default: result = 0
    }
    let net = parseInt(props.salary) - parseInt(tax+ result);

    return (
        <>
        <h3>Tax: £{tax}</h3>
        <h3>Net: £{net}</h3>
        <h3>Allowance: £{result}</h3>
        </>
    );
    
}


export default TaxCalculator;