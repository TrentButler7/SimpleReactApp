import TextField from '@mui/material/TextField';
import '../css/Global.css';

function Search({inputHandler}){
    return(
        <TextField 
            id="Outlined" 
            variant="outlined" 
            label="Search"
            onChange={inputHandler} />
    )
}

export default Search;