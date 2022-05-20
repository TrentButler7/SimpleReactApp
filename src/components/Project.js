import '../css/Project.css';
import {useState} from 'react';

function Project(props){
    function deleteHandler(){

    }

    return( 
        <div>
            <button className="btnCloseProject" onClick={deleteHandler}>X</button>
            <h2>{props.projectName}</h2>
            <p>{props.description}</p>
            <p>{props.start_date}</p>
            <p>{props.end_date}</p>
        </div>
    );
}

export default Project;