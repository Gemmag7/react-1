
import {useState} from "react";

function Test(){
    const [num, changeNumber] = useState(345)
   
    function incrementNumber(){
        changeNumber(num +1)
      
    }

     
    return(
        <>
       <br/>
       Number: <b >{num}</b><br/>
        <input type="button" value="click it" onClick={ () => incrementNumber()}/>
        <br/>
        <br/>
        </>
    )
}
export default Test;