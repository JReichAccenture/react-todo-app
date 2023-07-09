import { Stack } from '@mui/material';
import MySelect from './MySelect';
import TodoModal from './TodoModal';
import { Task } from '../classes/Task';

interface AppHeaderProperties {
    createTask: (newTask: Task) => void;
}

function AppHeader(props: AppHeaderProperties) {
    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <TodoModal
                    createTask={props.createTask}
                    create={true}
                ></TodoModal>
                <MySelect></MySelect>
            </Stack>
        </div>
    );
}

export default AppHeader;
