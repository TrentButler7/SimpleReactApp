import '../css/Form.css';

function Form(props){
    function handleSubmit(event){
        event.preventDefault();
        props.onFormSubmit();
    }

    return(
        <div className="form">
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Project Name' />
                <input type="number" placeholder='Project ID' />
                <input type="text" placeholder='Description' />
                <label>Start Date</label>
                <input type="date" />
                <label>End Date</label>
                <input type="date" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;