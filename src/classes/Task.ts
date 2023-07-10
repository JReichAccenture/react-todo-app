export class Task {
    id = new Date().getTime();
    constructor(
        public title: string,
        public status: TaskStatus
    ) {}
}

export enum TaskStatus {
    Incomplete = 'incomplete',
    Done = 'done',
}

export type TaskFilterOption = TaskStatus | 'all';
