type TaskPriority = 'low' | 'medium' | 'high';

export type TaskFormData  = {
    taskTitle: string
    taskDescription: string
    taskPriority: TaskPriority;
}