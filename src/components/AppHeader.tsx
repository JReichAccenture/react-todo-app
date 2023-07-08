import { Button, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MySelect from './MySelect';
import AppContent from './AppContent';
import TodoModal from './TodoModal';
import React from 'react';

function AppHeader() {
    const [isModalOpen, openModal] = React.useState(false);

    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <TodoModal
                    isOpen={isModalOpen}
                    openModal={openModal}
                ></TodoModal>
                <MySelect></MySelect>
            </Stack>
            <AppContent></AppContent>
        </div>
    );
}

export default AppHeader;
