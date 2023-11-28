import { useState, useEffect } from "react";

function Effects(){

    let [count, counter] = useState(10)
    let [countTn, counterTen] = useState(0)

    /**function counting(){
        counter(count+10)
        if (count %10 ===0){
            counterTen (countTn+1)
        }
    }*/

    useEffect(() => {
        if(count%10 ==0){
            counterTen(countTn+1)
        }
    }, [count])
    return(
        <>
        Value: <b>{count}</b>
        <br/>
        Tens = {countTn}
        <br/>
        <input type="button" value="Ok" onClick={() => counter(count+1)}/>
        <br/>
        
        </>
    )
}

export default Effects;