function doSomething(){
    alert("Hello")
}

function Test(){
    return(
        <>
        <input type="button" value="click it" onclick="doSomething()"/>
        </>
    )
}

export default {Test, doSomething};