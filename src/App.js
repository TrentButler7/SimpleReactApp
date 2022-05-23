import './css/App.css';
import Project from './components/Project';
import Form from './components/Form';
import Backdrop from './components/Backdrop';
import Search from './components/Search';
import { useState } from 'react';
import { FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';

function App() {
  const [formIsOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchInput, setInput] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [sortBy, setSortBy] = useState("");

  function newProjectHandler(){
    setFormOpen(true);
  }

  function cancelNewProjectHandler(){
    setFormOpen(false);
  }

  function submitNewProjectHandler(newProject){
    setFormOpen(false);
    setData(data => [...data, newProject]);
  }

  function inputHandler(event){
    var lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  }

  function handleSortDirectionChange(event){
    setSortDirection(event.target.value);
  }

  function handleSortByChange(event){
    setSortBy(event.target.value);
  }

  return (
    <div className='wrapper'>
      <Search inputHandler={inputHandler}/>
      <FormControl sx={{midWidth: 80}}>
        <InputLabel id='sortByLabel'>Sort By</InputLabel>
        <Select labelId='sortByLabel' value={sortBy} label="Sort By" onChange={handleSortByChange}>
          <MenuItem value={"projectName"}>Project Name</MenuItem>
          <MenuItem value={"startDate"}>Start Date</MenuItem>
        </Select>
        <FormHelperText sx={{padding: 0}}>Sort By</FormHelperText>
      </FormControl>
      <FormControl sx={{midWidth: 80}}>
        <InputLabel id='sortSwitchLabel'>Sort Direction</InputLabel>
        <Select labelId='sortSwitchLabel' value={sortDirection} label="Sort By" onChange={handleSortDirectionChange}>
          <MenuItem value={"a"}>Ascending</MenuItem>
          <MenuItem value={"b"}>Decending</MenuItem>
        </Select>
        <FormHelperText sx={{padding: 0}}>Sort Direction</FormHelperText>
      </FormControl>
      <button className='btnNewProject' onClick={newProjectHandler} >Create New Project</button>
      <Project onDataChange={setData} data={data} searchInput={searchInput}/>
      { formIsOpen && <Form onFormSubmit={submitNewProjectHandler}/>}
      { formIsOpen && <Backdrop onClick={cancelNewProjectHandler}/>}
    </div>
  );
}

export default App;
