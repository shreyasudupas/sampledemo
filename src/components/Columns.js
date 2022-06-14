import React from 'react'

function Columns() {
  return (
    //  here div is added in tr which is not correct 
    // <div>
    //     <td>Name</td>
    //     <td>Price</td>
    // </div>
    <React.Fragment>
        <td>Name</td>
        <td>Price</td>
    </React.Fragment>
  )
}

export default Columns