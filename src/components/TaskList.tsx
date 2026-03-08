import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/16/solid"
import type { TaskActions } from "../reducers/task-reducer"
import type { SortByOption, Task, TaskStatus } from "../types"

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
    ]

    const statusStyles: Record<TaskStatus, string> = {
        pending: 'bg-gray-100 text-gray-800 border border-gray-200',
        'in-progress': 'bg-amber-100 text-amber-800 border border-amber-200',
        completed: 'bg-green-100 text-green-800 border border-green-200',
    };

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
                    <div key={task.id} className="p-5 bg-white mt-4 flex justify-between items-start rounded-lg border border-gray-400 shadow-lg">
                        <div className="space-y-1">
                            <h3 className="text-3xl font-semibold text-gray-900">{task.taskTitle}</h3>
                            <p className="text-lg text-gray-700">{task.taskDescription}</p>

                            <div className="flex items-baseline gap-4 text-sm text-gray-600 pt-4">
                                <span>Status: <span className={`inline-flex items-center align-baseline px-2 py-0.5 rounded-md text-sm font-medium transition-colors duration-500 bg-${statusStyles[task.status]}-100 text-${statusStyles[task.status]}-800 border border-${statusStyles[task.status]}-200`}>{task.status}</span></span>
                                <span>Priority: <strong className="text-gray-900 font-medium">{task.taskPriority}</strong></span>
                                <span>Created: <strong className="text-gray-900 font-medium">{new Date(task.createdAt).toLocaleDateString()}</strong></span>
                                { task.endAt && <span>Finished: <strong className="text-gray-900 font-medium">{new Date(task.endAt).toLocaleString()}</strong></span>}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => dispatch({ type: 'toggle-task-status', payload: { id: task.id } })}
                            >
                                {task.status === 'pending' && 'Start'}
                                {task.status === 'in-progress' && 'Complete'}
                                {task.status === 'completed' && 'Reopen'}
                            </button>

                            <button
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Update task"
                                onClick={() => setEditingTask(task)}
                            >
                                <PencilSquareIcon
                                    className="h-6 w-6"
                                />
                            </button>

                            <button
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Delete task"
                                onClick={() => dispatch({ type: 'delete-task', payload: { id: task.id } })}
                            >
                                <XCircleIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}