import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Task, TaskStatus } from '../classes/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TodoModal from './TodoModal';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from 'react';
import { MyContext } from '../context';

function TodoList() {
    const {
        updateTask,
        deleteTask,
        getTask,
        taskFilterOption,
        getFilteredTasks,
    } = useContext(MyContext);

    function onCheckboxChange(event: any, task: Task) {
        updateTask({
            ...task,
            status: event.target.checked
                ? TaskStatus.Done
                : TaskStatus.Incomplete,
        });
    }

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 400,
                bgcolor: 'background.paper',
            }}
        >
            <List>
                {getFilteredTasks(taskFilterOption).map((task) => {
                    return (
                        <>
                            <ListItem key={task.id} disablePadding>
                                <Checkbox
                                    checked={
                                        task.status === TaskStatus.Done
                                            ? true
                                            : false
                                    }
                                    onChange={(event) =>
                                        onCheckboxChange(event, task)
                                    }
                                />
                                <ListItemButton>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary={task.title} />
                                </ListItemButton>
                                <IconButton
                                    onClick={() => deleteTask(task.id)}
                                    edge="end"
                                    aria-label="delete"
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <TodoModal
                                    create={false}
                                    taskId={task.id}
                                    getTask={getTask}
                                    updateTask={updateTask}
                                ></TodoModal>
                            </ListItem>
                            <Divider></Divider>
                        </>
                    );
                })}
            </List>
        </Box>
    );
}

export default TodoList;
