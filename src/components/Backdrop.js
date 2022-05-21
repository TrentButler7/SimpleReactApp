import '../css/Form.css';

function Backdrop(props) {
    return <div className='backdrop' onClick={props.onClick} />;
}

export default Backdrop;