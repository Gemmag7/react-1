import {useState} from "react"

function Comments(){
    let [comments, addComments] = useState([]);

    function displayData(records){
        console.log(records)
        
        addComments(records)

     }
 
     function done(res){
         let dataPromise = res.json()
         dataPromise.then(displayData)
     }
     function getData(){
        let id = document.getElementById("postID").value;
        let promiseRef = fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
        console.log(id)
        promiseRef.then(done)
     }

    return(
        <>
        <input id="postID" type="number"  onChange={() => getData()}></input>
        <br/>
        <br/>
        <table>
    <tr>
        <th>Post ID</th>
        <th>CommentID</th>
        <th>name</th>
        <th>email</th>
        <th>Comment</th>
    </tr>
            
            {
                comments.map( (X) =>
                <tr>
                    
                    <td>{X.postId}</td>
                    <td>{X.id}</td>
                    <td>{X.name}</td>
                    <td>{X.email}</td>
                    <td>{X.body}</td>
                </tr>
                ) 
            }
</table>
</>
    )
}

export default Comments;