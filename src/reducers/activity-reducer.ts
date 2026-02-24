import type { Task } from '../types/index'

export type TaskActions = { type: 'add-task', payload: { newTask: Task }};

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
        default:
            return state;
    }
}