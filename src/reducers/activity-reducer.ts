import type { Task } from '../types/index'

export type TaskActions =
{ type: 'add-task', payload: { newTask: Task }} |
{ type: 'delete-task', payload: { id: Task['id'] }};

export type TaskState = {
    tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
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
        default:
            return state;
    }
}