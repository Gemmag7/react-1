import {useState, useEffect } from "react"
import "../UseEffectExample.css"


function UseEffectExample(){
        
    //Subjects array that has data such as the trainer name and the subject they teach
    let training =[
        {
            groupId: 21, 
            startDate: "30/11/2023", 
            duration: "4 days",
            location: "Glasgow", 
            participants:21
        }, 
        {
            groupId: 76, 
            startDate: "01/12/2023", 
            duration: "4 weeks",
            location: "Manchester", 
            participants:14
        }, 
        {
            groupId: 44, 
            startDate: "02/12/2023", 
            duration: "4 months",
            location: "London", 
            participants:25
        }
    ]
    let[selectGroup, setTrainingGroup] = useState("")
    let[newTrainingList, setNewTrainingList] = useState(training)

    /**This is only executed when a search value is entered and changes the whole subjecct list with filtered data */
    useEffect( () =>  {
        setNewTrainingList (training.filter((rec) => rec.groupId ==selectGroup))
    },[selectGroup])

   function filterTrainers(){
    setTrainingGroup(document.getElementById("selectGroup").value)
   
}
    
    return(
        <>
        <select id="selectGroup" onchange={() => filterTrainers()}>
            <option disabled>Choose One..</option>
      <option value="21"> 21</option>
      <option value="76">76</option>
      <option value="44">44 </option>  
    </select>
        <button id="searchBtn" className="button" onClick={() => filterTrainers()} >Search</button>
        <br/>
       Group ID: <b>{selectGroup}</b>
        <br/>
        <br/>
        <br/>
        <table >
            <tr>
            <th>ID</th>
            <th>Start Date</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Participants</th>
            {/**<th>Trainer</th>*/}
            </tr>
            {newTrainingList.map((group) =>(
            <tr>
                <td>{group.groupId}</td>
                <td>{group.startDate}</td>
                <td>{group.duration}</td>
                <td>{group.location}</td>
                <td>{group.participants}</td>
               {/**  <td>{subject.trainerName}</td>**/}
            </tr>
            )
      )}
       </table>
            
        </>
    )
}


export default UseEffectExample;