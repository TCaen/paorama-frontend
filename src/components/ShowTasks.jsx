// ShowTasks.js
import React from 'react';

const ShowTasks = ({ taskList, onDelete  }) => {

  const handleDelete = (index) => {
    if (onDelete) {
      onDelete(index);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.completed ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => {}}>Edit</button>
                <button onClick={() =>handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTasks;
 