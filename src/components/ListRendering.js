import React from "react";
import Person from "./Person";

function ListRendering(){

    const persons = [
        {
            id:1,
            "name":"shreyas",
            "skill":"Fullstack"
        },
        {
            id:2,
            "name":"noor",
            "skill":".net"
        },
        {
            id:3,
            "name":"sarojini",
            "skill":"manager"
        }
    ]

    const personList = persons.map((person, index) => 
        <Person key={index} person={person}/>)

    return <div>{personList}</div>
}

export default ListRendering