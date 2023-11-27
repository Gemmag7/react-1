function Addition(props){

    let result =0
    switch(props.operation){
        case "Add": result = parseInt(props.num1) + parseInt(props.num2); break;
        case "Subtract": result = parseInt(props.num1) - parseInt(props.num2); break;
        case "Multiply": result = parseInt(props.num1) * parseInt(props.num2); break;
        case "Divide": result = parseInt(props.num1) / parseInt(props.num2); break;
        default:
            result="100"
    }
    //let result = parseInt(props.num1) + parseInt(props.num2);
    
    return(

        <>
        <br/>
        First Number: <b>{parseInt(props.num1)}</b>
        <br/>
        Second Number: <b>{props.num2}</b>
        <br/>
        The result of the {props.operation} is: <b>{result}</b>
    </>

    
    
    );
}

export default Addition;