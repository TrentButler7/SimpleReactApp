import { useRef } from 'react';
import '../css/Form.css';

function Form({onFormSubmit}){
    const nameInputRef = useRef();
    const idInputRef = useRef();
    const descInputRef = useRef();
    const startDateInputRef = useRef();
    const endDateInputRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        const newProject = {
            projectName: nameInputRef.current.value,
            projectIdentifier: idInputRef.current.value,
            description: descInputRef.current.value,
            start_date: startDateInputRef.current.value,
            end_date: endDateInputRef.current.value
        }

        onFormSubmit(newProject);
    }

    return(
        <div className="form">
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Project Name' ref={nameInputRef} />
                <input type="number" placeholder='Project ID' ref={idInputRef} />
                <input type="text" placeholder='Description' ref={descInputRef} />
                <label>Start Date</label>
                <input type="date" ref={startDateInputRef} />
                <label>End Date</label>
                <input type="date" ref={endDateInputRef} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;