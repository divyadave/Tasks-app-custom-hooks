import classes from './TasksItem.module.css';

const TaskItem = (props) => {
    console.log(props)
    return (
        <li className={classes.task}>{props.children}</li>
    )

}
export default TaskItem