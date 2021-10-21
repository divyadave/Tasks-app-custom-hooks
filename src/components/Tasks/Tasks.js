import Section from "../../UI/Section";
import classes from './Tasks.module.css';
import TaskItem from "./TasksItem";


const Tasks = (props) => {
    console.log(props.items)
    let taskList = <h2>No tasks found. Start adding some!</h2>;
    if(props.items.length > 0) {
        taskList = (
            <ul>
                {
                    props.items.map((item) => {
                       return <TaskItem id={item.id}>{item.text}</TaskItem> 
                    })
                }
            </ul>
        )
    }
    let content = taskList;
    if (props.error) {
        content = <button onClick={props.onFetch}>Try again</button>;
      }
    
      if (props.loading) {
        content = 'Loading tasks...';
      }
    
    return (
        <Section>
            <div className={classes.container}>{content}</div>
        </Section>
    )

}
export default Tasks;