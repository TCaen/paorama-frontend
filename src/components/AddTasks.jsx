import React, { useState } from 'react';


const AddTasks = ({ tasks, setTasks, onTaskAdded }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      completed: completed,
    };

    setTasks([...tasks, newTask]);

    // Appel de la fonction de rappel pour informer le parent de l'ajout de la tâche
    if (onTaskAdded) {
      onTaskAdded();
    }

    setTaskTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTasks;