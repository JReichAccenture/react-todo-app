import './App.css';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import { useTaskState } from './hooks/app_state';
import TodoList from './components/TodoList';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MyContext } from './context';

function App() {
    return (
        <div className="wrapper">
            <MyContext.Provider value={useTaskState()}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <PageTitle></PageTitle>
                    <AppHeader></AppHeader>
                    <TodoList></TodoList>
                </LocalizationProvider>
            </MyContext.Provider>
        </div>
    );
}

export default App;
