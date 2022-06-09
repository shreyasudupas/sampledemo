import React from "react";

function Greet(props){
    // destructuring properties
    const { name,surname } = props

    return (
    <h2>Greet {name} {surname} to functional component</h2>
    )
}

export default Greet