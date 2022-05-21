import '../css/Project.css';
import {Component} from 'react';

class Project extends Component{
    constructor(){ 
        super(); 
        this.state= { data: [] } 
    }

    componentDidMount(){
        fetch('./data.json') 
        .then(response=>response.json()) 
        .then(result => { this.setState({data: result}) })
    }

    render(){
        const projectsList = this.state.data.map( item => (
            <div className='projectItem'>
                <button className="btnDeleteProject">X</button>
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
}

export default Project;