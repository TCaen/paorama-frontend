import React, { useState, useEffect } from 'react';


const AddTasks = ({ tasks, setTasks, onTaskAdded, editIndex, editTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (editIndex !== null) {
      setTaskTitle(editTask.title);
      setCompleted(editTask.completed);
    }
  }, [editIndex, editTask]);


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      completed: completed,
    };

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, newTask]);
    }

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