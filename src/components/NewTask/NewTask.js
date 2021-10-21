import { useState } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
 /*  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); */
  const {isLoading, error, sendRequest: sendTasks} = useHttp()
  const createTask = (enteredText, task) => {
    let generatedId = task.name
    const createdTask = {id: generatedId, text: enteredText}
    props.onTasks(createdTask)
}
    const enteredTask = async (enteredText) => {
        
        sendTasks(
            {
                url: 'https://tasks-2fd5c-default-rtdb.firebaseio.com/tasks.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: { text: enteredText }
                

            },
            createTask.bind(null,enteredText)
          
        )
       


    }

    return (
        <Section>
            <TaskForm enterTasks={enteredTask} loading={isLoading}></TaskForm>
            {error && <p>{error}</p>}
        </Section>
    )

}
export default NewTask;