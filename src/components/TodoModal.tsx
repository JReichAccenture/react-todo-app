import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import { TaskStatus, Task } from '../classes/Task';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import MySelect from './MySelect';
import { DatePicker } from '@mui/x-date-pickers';

interface ModalProperties {
    createTask?: (newTask: Task) => void;
    create: boolean;
    taskId?: number;
    getTask?: (taskId: number) => Task | undefined;
    updateTask?: (updatedTask: Task) => void;
}

function TodoModal(props: ModalProperties) {
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [status, setStatus] = useState<TaskStatus>(TaskStatus.Incomplete);
    const [dueDate, setDueDate] = useState<Date | undefined | null>(null);

    const handleClickOpen = () => {
        setOpen(true);
        if (!props.create && props.taskId && props.getTask) {
            const task = props.getTask(props.taskId) as Task;
            setTitle(task.title);
            setStatus(task.status);
            setDueDate(task.dueDate);
        }
    };

    const handleClose = () => {
        setTitle('');
        setStatus(TaskStatus.Incomplete);
        setOpen(false);
        setDueDate(null);
    };

    const onTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const onStatusChange = (status: TaskStatus) => {
        setStatus(status);
    };

    const onDueDateChange = (date: Date | null | undefined) => {
        setDueDate(date);
    };

    const submitData = () => {
        if (props.create && props.createTask) {
            const task = new Task(title, status as TaskStatus, dueDate);
            props.createTask(task);
        } else if (props.updateTask) {
            props.updateTask({ id: props.taskId!, title, status, dueDate });
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
                        <MySelect
                            selectionItems={[...Object.values(TaskStatus)]}
                            defaultValue={status}
                            setValue={onStatusChange}
                        ></MySelect>
                        <DatePicker
                            key={'todo'}
                            value={dueDate}
                            onChange={onDueDateChange}
                        ></DatePicker>
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
