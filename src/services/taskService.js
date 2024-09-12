export const loadTasks = () => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
        return JSON.parse(tasks);
    }
    return []; 
};

export const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert to JSON string and save
};