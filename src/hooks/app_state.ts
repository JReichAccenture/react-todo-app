import { useState, useEffect } from 'react';
import { Task } from '../classes/Task';

export const useTaskState = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        console.log('tasks ', tasks);
    });

    const updateTask = (updatedTask: Task) => {
        const oldTasks = [...tasks];
        const updatedTasks = oldTasks.map((task) => {
            if (task.id === updatedTask.id) {
                return updatedTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId: number) => {
        const oldTasks = [...tasks];
        const filteredTasks = oldTasks.filter((task) => task.id !== taskId);
        setTasks(filteredTasks);
    };

    const getTask = (taskId: number) =>
        tasks.find((task) => task.id === taskId);

    const createTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

    return {
        tasks,
        updateTask,
        deleteTask,
        getTask,
        createTask,
    };
};
