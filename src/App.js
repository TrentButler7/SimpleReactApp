import './css/App.css';
import Project from './components/Project';
import Form from './components/Form';
import Backdrop from './components/Backdrop'
import { useState } from 'react';

function App() {
  const [formIsOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);

  function newProjectHandler(){
    setFormOpen(true);
  }

  function cancelNewProjectHandler(){
    setFormOpen(false);
  }

  function submitNewProjectHandler(newProject){
    alert("here");
    setFormOpen(false);
    setData(data => [...data, newProject]);
  }

  return (
    <div className='wrapper'>
      <button className='btnNewProject' onClick={newProjectHandler} >Create New Project</button>
      <Project onDataChange={setData} data={data}/>
      { formIsOpen && <Form onFormSubmit={submitNewProjectHandler}/>}
      { formIsOpen && <Backdrop onClick={cancelNewProjectHandler}/>}
    </div>
  );
}

export default App;
