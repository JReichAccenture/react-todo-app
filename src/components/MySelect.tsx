import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React from 'react';

function MySelect() {
    const [taskType, settaskType] = React.useState('all');

    const handleChange = (event: SelectChangeEvent) => {
        settaskType(event.target.value as string);
    };

    const list = ['all, incomplete, complete'];

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                {
                    <InputLabel id="demo-simple-select-label">
                        Task type
                    </InputLabel>
                }
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={taskType}
                    label="taskType"
                    onChange={handleChange}
                    defaultValue="all"
                >
                    {/* {list.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))} */}
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>incomplete</MenuItem>
                    <MenuItem value={30}>complete</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default MySelect;
