import type { Task } from '../types/index'
import type { TaskStatus }  from '../types';

export type TaskActions =
{ type: 'add-task', payload: { newTask: Task }} |
{ type: 'delete-task', payload: { id: Task['id'] }} |
{ type: 'toggle-task-status', payload: { id: Task['id'] } };

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

        case 'toggle-task-status':
            const updateTasks: Task[] = state.tasks.map((task) => {
                if (task.id !== action.payload.id) return task;

                let nextStatus: TaskStatus;
                switch (task.status) {
                    case 'pending':
                        nextStatus = 'in-progress'
                        break
                    case 'in-progress':
                        nextStatus = 'completed'
                        break
                    default:
                        nextStatus = 'pending'
                }

                return {
                    ...task,
                    status: nextStatus
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