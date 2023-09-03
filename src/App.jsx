import { useState } from "react";
import React from "react";

import "./App.css";
import Tasks from "./components/Tasks";

const App = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [id, setId] = useState(0);

  const addTask = (text) => {
    if (!text) return;
    const taskObj = { id: id, text: text, isCompleted: false };
    setId(id + 1);
    setTaskItems([...taskItems, taskObj]);
    setTask("");
  };

  const removeTask = (id) => {
    const filtered = taskItems.filter((task) => task.id !== id);
    setTaskItems(filtered);
  };

  const completeTodo = (id) => {
    const newListOfTasks = [...taskItems];
    newListOfTasks.map((task) =>
      task.id === id ? (task.isCompleted = !task.isCompleted) : task,
    );
    setTaskItems(newListOfTasks);
  };

  const editTodo = (id) => {
    let editedTask = prompt("Write the new task");
    if (!editedTask) return;
    const newListOfTasks = [...taskItems];
    newListOfTasks.map((task) =>
      task.id === id ? (task.text = editedTask) : task,
    );
    setTaskItems(newListOfTasks);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="message">
          <h1> Hello Guest!</h1>
          <p>Welcome to your task manager.</p>
        </div>
        <div className="input-wrapper">
          <input
            placeholder="Write down your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="button-add" onClick={() => addTask(task)}>
            +
          </button>
        </div>
        <div className="task-wrapper">
          {taskItems.map((task) => (
            <Tasks
              key={task.id}
              task={task.text}
              id={task.id}
              isCompleted={task.isCompleted}
              fnEditTask={editTodo}
              fnRemoveTask={removeTask}
              fnCompleteTodo={completeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
