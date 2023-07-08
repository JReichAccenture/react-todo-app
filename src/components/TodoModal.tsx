import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    TextField,
} from '@mui/material';
import React, { useState, Dispatch, SetStateAction } from 'react';
import MySelect from './MySelect';
import { TaskStatus, Task } from '../classes/Task';

interface ModalProperties {
    isOpen: boolean;
    openModal: Dispatch<SetStateAction<boolean>>;
}

function TodoModal(props: ModalProperties) {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(TaskStatus.Incomplete);

    const handleClickOpen = () => {
        props.openModal(true);
    };

    const handleClose = () => {
        props.openModal(false);
    };

    const onTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const onStatusChange = (event: any) => {
        setStatus(event.target.value);
    };

    const submitData = () => {
        const task = new Task(title, status as TaskStatus);
        console.log(task);
        handleClose();
    };

    {
        return (
            <div>
                <Button
                    variant="contained"
                    type="button"
                    onClick={handleClickOpen}
                >
                    Add Task
                </Button>
                <Dialog open={props.isOpen} onClose={handleClose}>
                    <DialogTitle>Add TODO</DialogTitle>
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
                            Add task
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
