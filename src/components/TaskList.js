import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css"

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
