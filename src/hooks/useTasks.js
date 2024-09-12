import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../services/taskService";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const storedTasks = loadTasks();
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []); // Empty dependency array to load once when the component is mounted

    // Save tasks to localStorage every time tasks array changes
    useEffect(() => {
        if (tasks.length > 0) {
            saveTasks(tasks);
        }
    }, [tasks]); // Dependency on 'tasks'

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return { tasks, addTask, toggleComplete, deleteTask };
};
