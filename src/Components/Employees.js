

function Employees(){

    let data =[2,3,5,6];

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
        }
        
    ]
    
    return(
        <>
        <table>
            <tr>
                <th>Employee Number</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
            </tr>
            {
                employees.map( (X) =>
                <tr>
                    <td>{X.regNo}</td>
                    <td>{X.name}</td>
                    <td>{X.salary}</td>
                    <td>{X.department}</td>
                </tr>
                ) 
            }
        </table>
        </>
    );
}

export default Employees;