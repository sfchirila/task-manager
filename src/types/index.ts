type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export type TaskFormData  = {
    taskTitle: string
    taskDescription: string
    taskPriority: TaskPriority;
}

export type Task = {
    id: string;
    taskTitle: string;
    taskDescription: string;
    taskPriority: TaskPriority;
    status: TaskStatus;
    createdAt: string;
    endAt: string;
}

export type TaskFilters = {
    taskName: string;
    status: TaskStatus | 'all';
    priority: TaskPriority | 'all';
}

export type SortByOption = 'createdAt' | 'status' | 'taskPriority';