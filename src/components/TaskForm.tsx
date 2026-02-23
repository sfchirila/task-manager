import { useState } from "react";
import type { TaskFormData } from "../types";

export function TaskForm() {

    const TASK_PRIORITIES = ['low', 'medium', 'high'];

    const [taskFormData, setTaskFormData] = useState<TaskFormData>({
        taskTitle: '',
        taskDescription: '',
        taskPriority: 'medium',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTaskFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <>
            <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
                        defaultValue="medium"
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
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white rounded-lg cursor-pointer"
                    value='Create task'
                />
            </form>
        </>
    )
}