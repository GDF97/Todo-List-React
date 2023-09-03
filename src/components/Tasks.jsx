import React from "react";

import "./Tasks.css";

const Tasks = ({
  task,
  id,
  isCompleted,
  fnEditTask,
  fnRemoveTask,
  fnCompleteTodo,
}) => {
  return (
    <div className="task">
      <p style={{ textDecoration: isCompleted ? "line-through" : "red" }}>
        {task}
      </p>
      <div className="button-wrapper">
        <button onClick={() => fnCompleteTodo(id)}>
          <i class="bx bx-check"></i>
        </button>
        <button onClick={() => fnEditTask(id)}>
          <i class="bx bxs-edit-alt"></i>
        </button>
        <button onClick={() => fnRemoveTask(id)}>
          <i class="bx bx-x-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Tasks;
