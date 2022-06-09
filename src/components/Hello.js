import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h2>This is Hello</h2>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello from Ksx HEllo')
    )
}

export default Hello