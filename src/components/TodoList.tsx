import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Task } from '../classes/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TodoModal from './TodoModal';

export interface TodoListProps {
    tasks: Task[];
    deleteTask: (id: number) => void;
    getTask: (id: number) => Task | undefined;
    updateTask: (updatedTask: Task) => void;
}

function TodoList(props: TodoListProps) {
    const { tasks, deleteTask, getTask, updateTask } = props;

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 400,
                bgcolor: 'background.paper',
            }}
        >
            <List>
                {tasks.map((task) => {
                    return (
                        <>
                            <ListItem key={task.id} disablePadding>
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
