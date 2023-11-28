import { useState } from "react"

function Posts(){
    let [posts, addPosts] = useState([])
    
        let promiseRef = fetch("https://jsonplaceholder.typicode.com/posts")
        promiseRef.then(storeData)
    
    
    function displayPosts(data){
        
    addPosts(data)
    console.log(data)
   // posts = data
    
    }
    
    function storeData(response){
        let dataPromise =  response.json()
        dataPromise.then(displayPosts)
    
    }

    return(
        <>
        
        <table>
            <tbody>
            <tr>
                <th>UserID </th>
                <th>PostId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            
            {
                posts.map( (X) =>
                <tr>
                    <td>{X.userId}</td>
                    <td>{X.id}</td>
                    <td>{X.title}</td>
                    <td>{X.body}</td>
                </tr>
                ) 
            }
            </tbody>
        </table>
        
        </>
    )
}

export default Posts;