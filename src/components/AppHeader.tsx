import { Stack } from '@mui/material';
import MySelect from './MySelect';
import TodoModal from './TodoModal';
import { Task, TaskFilterOption, TaskStatus } from '../classes/Task';

interface AppHeaderProperties {
    createTask: (newTask: Task) => void;
    taskFilterOption: TaskFilterOption;
    setTaskFilterOption: (option: TaskFilterOption) => void;
}

function AppHeader(props: AppHeaderProperties) {
    const listElements = ['all', ...Object.values(TaskStatus)];
    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <TodoModal
                    createTask={props.createTask}
                    create={true}
                ></TodoModal>
                <MySelect
                    defaultValue={props.taskFilterOption}
                    setValue={props.setTaskFilterOption}
                    selectionItems={listElements}
                ></MySelect>
            </Stack>
        </div>
    );
}

export default AppHeader;
