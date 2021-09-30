
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
 import About from './components/About';
import Footer from './components/Footer'
import Task from './components/Task';
import Header from './components/Header';
import {useState,useEffect} from 'react'
import AddTask from './components/AddTask';

function App() {
  const[showAddTask,setShowAddTask]=useState(false);
  const[tasks,setTasks] = useState([]);
  useEffect(() => {
   
    const getTask = async () =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTask();
  },[]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    console.log(data);
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  }
  
    const addTask =async (task) =>{
      const res = await fetch('http://localhost:5000/tasks',{
        method:'POST',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(task)
      })

      const data = await res.json();
      setTasks([...tasks,data]);

      // console.log(task);
      // const id = Math.floor(Math.random()*1000)+1;
      // const newTask = {id,...task};
      
      // setTasks([...tasks,newTask]);
    }
    const deleteTask =async (id) =>{
      await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE'});

      setTasks(tasks.filter((task) => task.id !== id));
      
    }
    const toggleReminder = async (id) =>{
        const taskToToggle = await fetchTask(id);
        const updateTask = {...taskToToggle,reminder : !taskToToggle.reminder};

        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
          method : 'PUT',
          headers : {
            'Content-type' : 'application/json'
          },
          body : JSON.stringify(updateTask)
        });
        const data = await res.json();
        setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder} : task))
    }
  return (
    <Router>
      <div className="App">
          <Header show={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)}/>
         
          <Route
            path='/'
            exact
            render={(props) => (
              <>
                 { showAddTask ? <AddTask  addTask={addTask}/> : ''}
                  <Task tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>
          
              </>
            )}
          />
          <Route path="/about" component={About}/>
          <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
