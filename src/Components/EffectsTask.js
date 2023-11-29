import {useEffect, useState} from "react";

function EffectsTask(){

    
    //Subjects array that has data such as the trainer name and the subject they teach
    let subjects =[
        {
            trainerName: "Shafeeq", 
            subject: "HTML"
        }, 
        {
            trainerName: "Shafeeq", 
            subject: "SQL"
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
        },
        {
            trainerName: "Tadas", 
            subject: "Angular"
        }
    ]
    let[trainerName, setTrainerName] = useState("")
    let[newSubjectList, setNewSubjectList] = useState(subjects)

    /**This is only executed when a search value is entered and changes the whole subjecct list with filtered data */
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
       Trainer: <b>{trainerName}</b>
        <br/>
        <br/>
        <br/>
        <table >
            <tr>
            <th>Subject</th>
            {/**<th>Trainer</th>*/}
            </tr>
            {newSubjectList.map((subject) =>(
            <tr>
                <td>{subject.subject}</td>
               {/**  <td>{subject.trainerName}</td>**/}
            </tr>
            )
      )}
       </table>
            
        </>
    )
}

export default EffectsTask;