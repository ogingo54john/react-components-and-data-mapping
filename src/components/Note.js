import React from "react";

function Note(props){
    return(
        <div>
            <div>
                <h2>{props.No}</h2>
                <p>{props.name}</p>
                <img src={props.urlSr} alt="images"/>
                <p>{props.src}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
                <p>{props.location}</p>
            </div>
        </div>
    )
}

export default Note;