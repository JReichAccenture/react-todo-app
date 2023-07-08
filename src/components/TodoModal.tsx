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
import React from 'react';
import MySelect from './MySelect';

function TodoModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add TODO</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            id="status"
                            select
                            label="Status"
                            defaultValue="Incomplete"
                            fullWidth
                            variant="standard"
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
                            onClick={handleClose}
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
