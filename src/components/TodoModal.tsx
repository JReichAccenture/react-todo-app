import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import { TaskStatus, Task } from '../classes/Task';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

interface ModalProperties {
    createTask?: (newTask: Task) => void;
    create: boolean;
    taskId?: number;
    getTask?: (taskId: number) => Task | undefined;
    updateTask?: (updatedTask: Task) => void;
}

function TodoModal(props: ModalProperties) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(TaskStatus.Incomplete);

    const handleClickOpen = () => {
        setOpen(true);
        if (!props.create && props.taskId && props.getTask) {
            const task = props.getTask(props.taskId) as Task;
            setTitle(task.title);
            setStatus(task.status);
        }
    };

    const handleClose = () => {
        setTitle('');
        setStatus(TaskStatus.Incomplete);
        setOpen(false);
    };

    const onTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const onStatusChange = (event: any) => {
        setStatus(event.target.value);
    };

    const submitData = () => {
        if (props.create && props.createTask) {
            const task = new Task(title, status as TaskStatus);
            props.createTask(task);
        } else if (props.updateTask) {
            props.updateTask({ id: props.taskId!, title, status });
        }

        handleClose();
    };

    {
        return (
            <div>
                {props.create ? (
                    <Button
                        variant="contained"
                        type="button"
                        onClick={handleClickOpen}
                    >
                        {props.create ? 'Add Task' : 'Update task'}
                    </Button>
                ) : (
                    <IconButton
                        onClick={handleClickOpen}
                        edge="end"
                        aria-label="delete"
                    >
                        <EditIcon />
                    </IconButton>
                )}

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                        {props.create ? 'Add TODO' : 'Update'}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            fullWidth
                            variant="standard"
                            value={title}
                            onChange={onTitleChange}
                        />
                        <TextField
                            id="status"
                            select
                            label="Status"
                            fullWidth
                            variant="standard"
                            value={status}
                            onChange={onStatusChange}
                        >
                            <MenuItem key="incomplete" value="incomplete">
                                Incomplete
                            </MenuItem>
                            <MenuItem key="done" value="done">
                                Done
                            </MenuItem>
                        </TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={submitData}
                        >
                            {props.create ? 'Add task' : 'Update task'}
                        </Button>
                        <Button
                            variant="outlined"
                            type="button"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default TodoModal;
