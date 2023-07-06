import { Button, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';

function AppHeader() {
    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <Button variant="contained" type="button">
                    Add task
                </Button>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Age"
                        onChange={() => {}}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </div>
    );
}

export default AppHeader;
