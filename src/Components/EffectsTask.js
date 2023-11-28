import {useEffect, useState} from "react";

function EffectsTask(){

    
    
    let subjects =[
        {
            trainerName: "Shafeeq", 
            subject: "HTML"
        }, 
        {
            trainerName: "Andy", 
            subject: "Java"
        }, 
        {
            trainerName: "Shafeeq", 
            subject: "CSS"
        }, 
        {
            trainerName: "Andy", 
            subject: "Python"
        },
        {
            trainerName: "Shafeeq", 
            subject: "JavaScript"
        }
    ]
    let[trainerName, setTrainerName] = useState("")
    let[newSubjectList, setNewSubjectList] = useState(subjects)

    useEffect( () =>  {
        setNewSubjectList (subjects.filter((rec) => rec.trainerName ==trainerName))
    },[trainerName])
   function filterTrainers(){
    setTrainerName(document.getElementById("txtName").value)
   
}
    
    return(
        <>
        <input id="txtName" type="text" />
        <button id="searchBtn" className="button" onClick={() => filterTrainers()} >Search</button>
        <br/>
       
        <br/>
        <table >
            <tr>
            <th>Subject Number</th>
            <th>Trainer</th>
            </tr>
            {newSubjectList.map((subject) =>(
            <tr>
                <td>{subject.subject}</td>
                <td>{subject.trainerName}</td>
            </tr>
            )
      )}
       </table>
            
        </>
    )
}

export default EffectsTask;