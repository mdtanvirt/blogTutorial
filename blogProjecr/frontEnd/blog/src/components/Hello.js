import React from 'react'

function Hello(props) {

    function clickMe(){
        alert("Button is clicked")
    }

    return(
        <div>
            <h1>My name: {props.name}</h1>
            <button className="btn btn-success" onClick={clickMe}>Click Me</button>
        </div>
        )
}

export default Hello;