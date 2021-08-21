import React, { useState } from 'react';

const Todo = () => {
  const INITIAL_STATE_TASK_LIST = [];
  const [task, updateTask] = useState('');
  const [taskList, setTaskList] = useState(INITIAL_STATE_TASK_LIST);
  const handleClickAdd = (event) => {
    updateTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTaskList([...taskList, task]);
    updateTask('');
  };

  const handleClickClear = () => {
    setTaskList(INITIAL_STATE_TASK_LIST);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input className='form-control' data-testid="input-task" placeholder="new task" value={task} onChange={handleClickAdd}/>
        <button data-testid="add" id="add" type="subimit">Add</button>
        <button  data-testid="clear" type="button" onClick={handleClickClear}>Clear</button>
      </form>
      <table data-testid="list">
        <thead>
            <tr>
              <td>Tasks</td>
            </tr>
        </thead>
        <tbody>
          {taskList.map((currentTask, index) =>(
            <tr key={index}>
              <td data-testid="row">{currentTask}</td>
            </tr>  
          ))}
          
        </tbody>
      </table>
    </>
  )
}

export default Todo;