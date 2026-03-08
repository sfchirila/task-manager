import { useEffect, useState, type Dispatch } from "react";
import { v4 as uuidv4 } from "uuid"

import type { Task, TaskFormData } from "../types";
import type { TaskActions } from "../reducers/task-reducer"


type TaskFormPorps = {
    editingTask: Task | null,
    onClearEdit: () => void,
    dispatch: Dispatch<TaskActions>
}

export function TaskForm({ editingTask, onClearEdit, dispatch }: TaskFormPorps) {

    const TASK_PRIORITIES = ['low', 'medium', 'high'];

    const formInitialState: TaskFormData = {
        taskTitle: '',
        taskDescription: '',
        taskPriority: 'medium',
    }

    useEffect(() => {
        if (editingTask) {
            setTaskFormData({
                taskTitle: editingTask.taskTitle,
                taskDescription: editingTask.taskDescription,
                taskPriority: editingTask.taskPriority
            });
        } else {
            setTaskFormData(formInitialState);
        }

    }, [editingTask])

    const [taskFormData, setTaskFormData] = useState<TaskFormData>(formInitialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTaskFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const task: Task = {
            id: editingTask ? editingTask.id : uuidv4(),
            taskTitle: taskFormData.taskTitle,
            taskDescription: taskFormData.taskDescription,
            taskPriority: taskFormData.taskPriority,
            status:  editingTask ? editingTask.status : 'pending',
            createdAt: editingTask ? editingTask.createdAt : new Date().toISOString(),
            endAt: editingTask ? editingTask.endAt : ''
        }

        if (editingTask) {
            dispatch({type: "update-task", payload: {id: editingTask.id, task}})
        } else {
            dispatch({type: "add-task", payload: { newTask: task }});
        }

        setTaskFormData(formInitialState);
        onClearEdit();
    }

    return (
        <>
            <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="taskTitle" className="font-medium">Task name:</label>
                    <input
                        type="text"
                        id="taskTitle"
                        className="border border-slate-300 p-2 rounded-lg"
                        placeholder="My first task, Call the bank, Drink 2L of water"
                        value={taskFormData.taskTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="taskDescription" className="font-medium">Task description:</label>
                    <textarea
                        id="taskDescription"
                        className="border border-slate-300 p-2 rounded-lg"
                        placeholder="Optional description"
                        rows={3}
                        value={taskFormData.taskDescription}
                        onChange={handleChange}
                    />
                </div>
                 <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="taskPriority" className="font-medium">Priority:</label>
                    <select
                        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                        id="taskPriority"
                        value={taskFormData.taskPriority}
                        onChange={handleChange}
                    >
                        {TASK_PRIORITIES.map((option) => (
                           <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                 </div>
                <input
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white rounded-lg cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                    value={ editingTask ? 'Update task' :  'Create task'}
                    disabled={taskFormData.taskTitle.trim() === ''}
                />
                 {editingTask && (
                    <button
                        type="button"
                        className="bg-red-800 hover:bg-red-900 w-full p-2 font-bold uppercase text-white rounded-lg cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                        onClick={onClearEdit}
                    >
                        Cancel edit
                    </button>
                )}
            </form>
        </>
    )
}