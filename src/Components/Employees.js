function doubleIt(x){
    return x*2
}

function Employees(){

    let data =[2,3,5,6]
    
    return(
        <>
        {data.map(doubleIt)
}
        </>
    );
}

export default Employees;