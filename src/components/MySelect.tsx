import { MenuItem, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { TaskStatus } from '../classes/Task';

interface MySelectProperties {
    selectionItems: Array<any>;
    defaultValue: string | TaskStatus;
    setValue: (newValue: any) => void;
}

function MySelect(props: MySelectProperties) {
    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        props.setValue(event.target.value as string);
    };

    return (
        <TextField
            id="status"
            select
            label="Status"
            fullWidth
            variant="standard"
            value={props.defaultValue}
            onChange={handleChange}
        >
            {props.selectionItems.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default MySelect;
