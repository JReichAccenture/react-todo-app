import './App.css';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import { useTaskState } from './hooks/app_state';
import TodoList from './components/TodoList';

function App() {
    const { tasks, updateTask, createTask, getTask, deleteTask } =
        useTaskState();

    return (
        <div className="wrapper">
            <PageTitle></PageTitle>
            <AppHeader createTask={createTask}></AppHeader>
            <TodoList tasks={tasks} deleteTask={deleteTask}></TodoList>
        </div>
    );
}

export default App;
