import { useState, useEffect } from 'react';
import { Task, TaskFilterOption } from '../classes/Task';

export const useTaskState = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskFilterOption, setTaskfilterOption] =
        useState<TaskFilterOption>('all');

    useEffect(() => {
        console.log('tasks ', tasks);
        console.log('taskfilteroption ', taskFilterOption);
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

    const getFilteredTasks = (option: TaskFilterOption) => {
        if (option === 'all') return tasks;
        const filteredTasks = tasks.filter((task) => {
            return task.status === option;
        });
        return filteredTasks;
    };

    return {
        tasks,
        updateTask,
        deleteTask,
        getTask,
        createTask,
        taskFilterOption,
        setTaskfilterOption,
        getFilteredTasks,
    };
};
