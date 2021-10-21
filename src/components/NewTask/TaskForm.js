import { useRef } from 'react';
import classes from './TaskForm.module.css';

const TaskForm = (props) => {
    const inputRef = useRef('')
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredValue = inputRef.current.value;
        if(enteredValue.trim().length > 0) {
            props.enterTasks(enteredValue)
            inputRef.current.value = "";
        }

    }
    


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="text" ref={inputRef}></input>
            <button>{props.isLoading ? 'Sending' : 'Add Tasks'}</button>
        </form>
    )

}
export default TaskForm;