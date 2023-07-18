import { Stack } from '@mui/material';
import MySelect from './MySelect';
import TodoModal from './TodoModal';
import { TaskStatus } from '../classes/Task';
import { useContext } from 'react';
import { MyContext } from '../context';

function AppHeader() {
    const { taskFilterOption, setTaskfilterOption } = useContext(MyContext);
    const listElements = ['all', ...Object.values(TaskStatus)];
    return (
        <div>
            <Stack spacing={2} direction={'row'}>
                <TodoModal create={true}></TodoModal>
                <MySelect
                    defaultValue={taskFilterOption}
                    setValue={setTaskfilterOption}
                    selectionItems={listElements}
                ></MySelect>
            </Stack>
        </div>
    );
}

export default AppHeader;
