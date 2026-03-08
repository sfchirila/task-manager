import TaskCard  from "./TaskCard"

import type { TaskActions } from "../reducers/task-reducer"
import type { SortByOption, Task } from "../types"

type TaskListProps = {
    tasks: Task[],
    dispatch: React.ActionDispatch<[action: TaskActions]>,
    setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>,
    setSortBy: React.Dispatch<React.SetStateAction<SortByOption>>
}

export function TaskList({tasks, dispatch, setEditingTask, setSortBy}: TaskListProps) {

    const shortByOptions = [
        { value: 'createdAt', label: 'Creation date' },
        { value: 'status', label: 'Status' },
        { value: 'taskPriority', label: 'Priority' },
    ];

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       setSortBy(e.target.value as SortByOption);
    }

    return (
        <>
            <h2 className="text-4xl font-bold pb-3">Task list</h2>

            <form className="flex justify-end items-center pb-2">
                <label htmlFor="sort" className="font-medium">Sort by:</label>
                <select name="sort" id="sort" className="border border-slate-300 p-2 rounded-lg bg-white w-50 ml-2" onChange={handleSortChange}>
                    {shortByOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </form>

            { tasks.length === 0 ? <p className="text-center text-gray-600 py-10">No tasks created yet</p> :
                tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        dispatch={dispatch}
                        setEditingTask={setEditingTask}
                    />
                ))
            }
        </>
    )
}