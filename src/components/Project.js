import '../css/Project.css';
import { useEffect } from 'react';

function Project({onDataChange, data, searchInput}){
    useEffect(() => {
        fetch('./data.json') 
        .then(response=>response.json()) 
        .then(result => { onDataChange(result) })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteProject = (arr, value) => {
        onDataChange(arr.filter (item => item !== value));
    };

    const filteredData = data.filter( (item) =>{
        if (searchInput == "") {
            return item;
        }
        else{
            return item.projectName.toLowerCase().includes(searchInput);
        }
    });

    const projectsList = filteredData.map( item => (
        <div className='projectItem' key={item.projectIdentifier}>
            <button className="btnDeleteProject" onClick={() => deleteProject(data, item)}>X</button>
            <div className='titleDescContainer'>
                <h2>{item.projectName}</h2>
                <p className='desc'>{item.description}</p>
            </div>
            <div className='dateContainer'>
                <h3>Start Date</h3>
                <p>{item.start_date}</p>
            </div>
            <div className='dateContainer'>
                <h3>Start Date</h3>
                <p>{item.end_date}</p>
            </div>
        </div>
    ));

    

    return( 
        <div className='projectContainer'>
            {projectsList}
        </div>
    );
}


export default Project;