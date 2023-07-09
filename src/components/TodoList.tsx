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

export interface TodoListProps {
    tasks: Task[];
}

function TodoList(props: TodoListProps) {
    const { tasks } = props;

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
