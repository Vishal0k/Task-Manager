import React from "react";
import "../styles/TaskItem.css";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <span
                onClick={() => toggleComplete(task.id)}
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
                {task.text}
            </span>
            <div className="buttonContainer">
            <button className="check" onClick={() => toggleComplete(task.id)}>
    {task.completed ? <TiTickOutline /> : <TiTick />}
</button>
            <button className="delete" onClick={() => deleteTask(task.id)}><MdDelete /></button>
            </div>
        </div>
    );
};

export default TaskItem;
