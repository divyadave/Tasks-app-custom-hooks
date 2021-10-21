import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
 /*  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); */
  /* const fetchTasks = async (tasksText) => {
    setIsLoading(true)
    setError(null)
    try
    {
    const response = await fetch("https://tasks-2fd5c-default-rtdb.firebaseio.com/tasks.json")
    if(!response.ok) {
      throw new Error("Request failed!")
    }
    const data = await response.json();
    transformData(data)
   
  }
  catch (err) {
    setError(err.message || 'Something went wrong!');
  }
  setIsLoading(false);
  } */

  const taskHandler = (task) => {
    setTasks((prevTask) => prevTask.concat(task))
    console.log(tasks)
    

  }
  

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  useEffect(() => {
    const transformData = (transObj) => {
      console.log(transObj)
      const loadedTasks = [];
      for(let taskKey in transObj) {
        loadedTasks.push({id: taskKey, text: transObj[taskKey].text})
      }
      setTasks(loadedTasks)
    }
    fetchTasks({url: 'https://tasks-2fd5c-default-rtdb.firebaseio.com/tasks.json'}, transformData);
  }, [fetchTasks])
  return (
    <>
  <NewTask onTasks={taskHandler}></NewTask>
  <Tasks items={tasks}
  loading={isLoading}
  error={error}
  onFetch={fetchTasks}></Tasks>
  </>
  );
}

export default App;
