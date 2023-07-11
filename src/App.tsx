import './App.css';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import { useTaskState } from './hooks/app_state';
import TodoList from './components/TodoList';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
    const {
        tasks,
        updateTask,
        createTask,
        getTask,
        deleteTask,
        taskFilterOption,
        setTaskfilterOption,
        getFilteredTasks,
    } = useTaskState();

    return (
        <div className="wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <PageTitle></PageTitle>
                <AppHeader
                    createTask={createTask}
                    taskFilterOption={taskFilterOption}
                    setTaskFilterOption={setTaskfilterOption}
                ></AppHeader>
                <TodoList
                    tasks={getFilteredTasks(taskFilterOption)}
                    deleteTask={deleteTask}
                    getTask={getTask}
                    updateTask={updateTask}
                ></TodoList>
            </LocalizationProvider>
        </div>
    );
}

export default App;
