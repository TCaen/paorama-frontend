// App.js
import React, { useState } from 'react';
import AddTasks from './components/AddTasks';
import ShowTasks from './components/ShowTasks';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleToggleView = () => {
    setShowAddTask(!showAddTask);
  };

  const handleTaskAdded = () => {
    setShowAddTask(false);
  };

  const handleDelete = (index) => {
    // Suppression de la tâche du tableau
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };


  return (
    <div>
      <h1>Task Manager</h1>
      {showAddTask ? (
        <AddTasks tasks={taskList} setTasks={setTaskList} onTaskAdded={handleTaskAdded} />
      ) : (
        <ShowTasks taskList={taskList}  onDelete={handleDelete} />
      )}
      <button onClick={handleToggleView}>
        {showAddTask ? 'Show Tasks' : 'Add Task'}
      </button>
    </div>
  );
};


export default App;
