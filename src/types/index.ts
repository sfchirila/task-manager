type TaskPriority = 'low' | 'medium' | 'high';
type TaskStatus = 'pending' | 'in-progress' | 'completed';

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
}