import {useState} from "react"
 
 
function CommentsFromServer(){
   
    let [comments, addComments]=useState([])
    let [ID, addID]=useState("")
 
    function getData(records){
        addComments(records)
        console.log(records)
    }
   
    function done(response){  
        let res= response.json()
        res.then(getData)
    }
 
   function sendRequest(){
        let ref
        if (ID==""){
            ref= fetch('https://jsonplaceholder.typicode.com/comments')
        }else{
            //alert(`https://jsonplaceholder.typicode.com/${cid}/comments`)
            ref= fetch(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`)
        }
        ref.then(done)
   }
 
   function getTextFromTextBox(ref){
    addID(ref.target.value)
 
 
   }
   sendRequest()
    return(
        <>
       
        <input id="commentID" type="text" onChange={getTextFromTextBox} />
        <button className="button" onClick={sendRequest}> Get Data </button>
        <table>
            <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
       
      {comments.map((comment) =>(
            <tr>
                <td>{comment.id}</td>
                <td>{comment.userId}</td>
                <td>{comment.title}</td>
                <td>{comment.body}</td>
            </tr>
            )
      )}
       </table>
   </>
    )
}
   
   
       
       
       
 
export default CommentsFromServer;