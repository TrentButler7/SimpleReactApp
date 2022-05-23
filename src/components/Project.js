import '../css/Project.css';
import { useEffect } from 'react';

function Project({searchInput, data, onDataChange, sortBy, sortDirection }){
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

    if(sortBy == "projectName"){
        filteredData.sort((a,b) => b.projectName.localeCompare(a.projectName));
    }
    else if(sortBy == "startDate"){
        filteredData.sort(function(a,b) {
            return new Date(b.start_date) - new Date(a.start_date);
        });
    }
    if (sortDirection == "a") {
        filteredData.reverse();
    }

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
                <h3>End Date</h3>
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