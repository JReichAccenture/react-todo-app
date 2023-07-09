import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React from 'react';
import { Task } from '../classes/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export interface TodoListProps {
    tasks: Task[];
    deleteTask: (id: number) => void;
}

function TodoList(props: TodoListProps) {
    const { tasks, deleteTask } = props;

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
