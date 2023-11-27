//import TaxCalculator from "./TaxCalculator";

function TaxCalculator(salary){
    let result =0
    let tax = 0
   
    if (salary <1000){
        tax = 0;
    }
    else{
        if(salary <2000){
        tax = salary * 0.15
        }
        else{
            if(salary <3000){
                tax = salary * 0.21
            }else{
                tax =salary * 0.31
            }
        }
    }

    return tax;
}
function Employees(props){

    let employees=[
        {
            regNo: 145, 
            name:"Shafeeq", 
            salary: 2300,
            department:"IT"
        }, 
        {
            regNo: 136, 
            name:"Shafeeq2", 
            salary: 5300,
            department:"Sales"
        },
        {
            regNo: 102, 
            name:"Shafeeq4", 
            salary: 1900,
            department:"HR"
        }, 
        {
            regNo: 335, 
            name:"Shafeeq3", 
            salary: 4300,
            department:"IT"
        },
        {
            regNo: 145, 
            name:"Shafeeq5", 
            salary: 6300,
            department:"HR"
        },
        
    ]
    
    return(
        <>
        <table>
            <tbody>
            <tr>
                <th>Employee No.</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Tax</th>
                <th>Net Salary</th>
                <th>Department</th>
            </tr>
            {
                employees.filter(emp =>emp.department == props.department).map( emp =>(
                <tr>
                    <td>{emp.regNo}</td>
                    <td>{emp.name}</td>
                    <td>£{emp.salary}</td>
                    <td>£{TaxCalculator(emp.salary)}</td>
                    <td>£{emp.salary - TaxCalculator(emp.salary)}</td>
                    <td>{emp.department}</td>
                </tr>
                )
                ) 
            }
            </tbody>
        </table>
        </>
    );
}

export default Employees;