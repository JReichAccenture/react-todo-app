import { Button, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MySelect from './MySelect';
import AppContent from './AppContent';
import TodoModal from './TodoModal';
import React from 'react';
import { Task } from '../classes/Task';

interface AppHeaderProperties {
    createTask: (newTask: Task) => void;
}

function AppHeader(props: AppHeaderProperties) {
    const [isModalOpen, openModal] = React.useState(false);

    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <TodoModal
                    isOpen={isModalOpen}
                    openModal={openModal}
                    createTask={props.createTask}
                ></TodoModal>
                <MySelect></MySelect>
            </Stack>
            <AppContent></AppContent>
        </div>
    );
}

export default AppHeader;
