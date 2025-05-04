import React,{useState} from 'react'

const Todolist = () => {

const [tasks, setTasks] = useState([' ']);
const [newTask, setnewTasks] = useState ('');
function handleInputChange(event){
  setnewTasks(event.target.value);
}

function addTask(){
  if(newTask.trim() !== ''){

setTasks(t =>[ ...t, newTask]);
setnewTasks('');
  }

}
function deleteTask(index){

  const updatedTask = tasks.filter((_,i) => i !== index );
  setTasks(updatedTask);
}
function moveTaskup(index){

  if(index > 0){
    const updatedTask = [...tasks ];
    [ updatedTask[ index], updatedTask[ index - 1]]=
    [ updatedTask[index-1 ],updatedTask[index ]];
    setTasks(updatedTask);   

  }

}

function moveTaskDown(index){
  
  if(index < tasks.length - 1 ){
    const updatedTask = [...tasks ];
    [ updatedTask[ index], updatedTask[ index + 1]]=
    [ updatedTask[index+1 ],updatedTask[index ]];
    setTasks(updatedTask);   
  }
}


  return (
    <div className='to-do'>
<h1>To-Do-List</h1>
    <div>
      <input type="text" placeholder='Enter a task ...' value={newTask} onChange={handleInputChange} />
      <button className='btn' onClick={addTask}>
        Add
      </button>
    </div>

     <ol>
      {tasks.map((task,index) =>(
      <li key={index}>
        <span className='text'>{task}</span>
        <button className='delete-btn' onClick={ () => deleteTask(index)}>Delete

        </button>

        <button className='up-btn' onClick={ () => moveTaskup(index)}>☝

        </button>

        <button className='up-btn' onClick={ () => moveTaskDown(index)}>
         ⬇️
        </button>
        <input className='box' type="checkbox" />
      </li> 
      
    ))}
     </ol>

    </div>
  );
}

export default Todolist