// App.js
import React, { useState } from 'react';
import AddTasks from './components/AddTasks';
import ShowTasks from './components/ShowTasks';
import './styles.css'; 


const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({ title: '', completed: false });


  const handleToggleView = () => {
    setShowAddTask(!showAddTask);
  };

  const handleTaskAdded = () => {
    setShowAddTask(false);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };

  const handleEdit = (index) => {
    // Mettez à jour l'état d'édition avec les valeurs de la tâche à éditer
    setEditTask({ ...taskList[index] });
    setEditIndex(index);
    setShowAddTask(true); // Affichez le formulaire d'édition
  };



  return (
    <div>
      <h1>Task Manager</h1>
      {showAddTask ? (
          <AddTasks
          tasks={taskList}
          setTasks={setTaskList}
          onTaskAdded={handleTaskAdded}
          editIndex={editIndex}
          editTask={editTask}
        />
      ) : (
        <ShowTasks taskList={taskList}  onDelete={handleDelete} onEdit={handleEdit} />
      )}
      <button onClick={handleToggleView}>
        {showAddTask ? 'Show Tasks' : 'Add Task'}
      </button>
    </div>
  );
};


export default App;
