import { createContext } from 'react';
import { Task, TaskFilterOption } from './classes/Task';

interface MyContextInterface {
    tasks: Task[];
    createTask: (t: Task) => void;
    updateTask: (t: Task) => void;
    deleteTask: (id: number) => void;
    taskFilterOption: TaskFilterOption;
    setTaskfilterOption: (option: TaskFilterOption) => void;
    getTask: (id: number) => Task | undefined;
    getFilteredTasks: (option: TaskFilterOption) => Task[];
}
export const MyContext = createContext({} as MyContextInterface);
