import React from "react";

function FunctionClick(){

    function clickHandler(){
        console.log('Button clicked');
    }
    
    return (
        <div>
            {/* here we should not specify function with () since its not function call,but a function This is same in class as well */}
            <button onClick={clickHandler}>Click from Function</button>
        </div>
    )
}

export default FunctionClick