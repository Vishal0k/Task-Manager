import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useTasks } from "./hooks/useTasks";
import "./App.css";

function App() {
  const { tasks, addTask, toggleComplete, deleteTask } = useTasks();

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
