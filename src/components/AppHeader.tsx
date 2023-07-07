import { Button, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MySelect from './MySelect';
import AppContent from './AppContent';
import TodoModal from './TodoModal';

function AppHeader() {
    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <Button variant="contained" type="button">
                    Add task
                </Button>
                <MySelect></MySelect>
            </Stack>
            <AppContent></AppContent>
            <TodoModal></TodoModal>
        </div>
    );
}

export default AppHeader;
