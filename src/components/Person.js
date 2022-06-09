import React from "react";

function Person(props){
    const {name,skill} = props.person
    console.log(props)
    return (
        <h2>I am {name}. I have {skill} skill</h2>
    )
}

export default Person