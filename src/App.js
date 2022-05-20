import './css/App.css';
import Project from './components/Project';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [formIsOpen, setFormOpen] = useState(false);

  function newProjectHandler(){
    setFormOpen(true);
  }

  return (
    <div className='wrapper'>
      <button className='btnNewProject' onClick={newProjectHandler}>Create New Project</button>
      <Project />
      { formIsOpen && <Form />}
    </div>
  );
}

export default App;
