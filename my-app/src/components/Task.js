
import TaskEach from "./TaskEach"

const Task = ({tasks,onDelete,onToggle}) => {
    
    return (
        <>
           {tasks.map((task)=>(
               <TaskEach key={task.id} onDelete={onDelete} onToggle={onToggle} task={task}/>
           ))} 
        </>
    )
}

export default Task
