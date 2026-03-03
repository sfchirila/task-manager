import type { Task } from '../types/index'
import type { TaskStatus }  from '../types';

export type TaskActions =
    { type: 'add-task', payload: { newTask: Task }} |
    { type: 'delete-task', payload: { id: Task['id'] }} |
    { type: 'update-task', payload: { id: Task['id'], task: Task }} |
    { type: 'toggle-task-status', payload: { id: Task['id'] }};

export type TaskState = {
    tasks: Task[];
}

const getTasksFromLocalStorage = (): Task[] => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

export const initialState: TaskState = {
    tasks: getTasksFromLocalStorage()
}

export const taskReducer = (state: TaskState = initialState, action: TaskActions): TaskState  => {

    switch(action.type) {
        case 'add-task':
            return {
                ...state,
                tasks:  [...state.tasks,  action.payload.newTask]
            }

        case 'delete-task':
            const updateState = state.tasks.filter((item) => item.id !== action.payload.id );

            return {
                ...state,
                tasks: updateState
            }

        case 'update-task':
            const tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload.task
                }

                return task
            })
            return {
                ...state,
                tasks
            }

        case 'toggle-task-status':
            const updateTasks: Task[] = state.tasks.map((task) => {
                if (task.id !== action.payload.id) return task;

                let nextStatus: TaskStatus;
                let endAt = task.endAt;
                switch (task.status) {
                    case 'pending':
                        nextStatus = 'in-progress'
                        break
                    case 'in-progress':
                        nextStatus = 'completed'
                        endAt = new Date().toISOString();
                        break
                    default:
                        nextStatus = 'pending'
                        endAt = '';
                }

                return {
                    ...task,
                    status: nextStatus,
                    endAt: endAt
                }
            });

            return {
                ...state,
               tasks: updateTasks
            }

        default:
            return state;
    }
}