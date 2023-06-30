import Task from './Task'
import { useRef, useState } from 'react';
// import './card.css'

export default function Card(props){

    const [taskList, settaskList] = useState([])
    const tasks = useRef();
    const [newTask,setnewTask] = useState("")
    function addTask(e){
        
        e.preventDefault();
        settaskList([...taskList,newTask]);
        setnewTask("");
        // console.log("hii",newTask);
        // console.log(newTaskArray,"new task",[...taskList,newTask]);
    }

    return <div className='card'>
        <h3>{props.heading}</h3>
        <form>
            <label>
                <input type="text" name="name" placeholder='add a task' value={newTask} onChange={(e)=>{setnewTask(e.target.value)}}/>
            </label>
            <button onClick={addTask}> <i class="fa fa-plus"></i> Add a task</button>
        </form>
        <Task className="task" taskList={taskList}/>
        
    </div>
}