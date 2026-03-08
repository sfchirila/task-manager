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

    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const pendingTasks = tasks.filter(task => task.status === 'pending').length;
    const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       setSortBy(e.target.value as SortByOption);
    }

    return (
        <>
            <h2 className="text-4xl font-bold pb-3">Task list</h2>

          <div className="flex justify-between items-center pb-4">
            <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-slate-100 px-3 py-2 rounded-lg border border-slate-300">
                    <p className="text-xs text-slate-600">Total</p>
                    <p className="text-base font-semibold text-slate-900">{tasks.length}</p>
                </div>

                <div className="bg-green-100 px-3 py-2 rounded-lg border border-green-400">
                    <p className="text-xs text-slate-700">Completed</p>
                    <p className="text-base font-semibold text-slate-900">{completedTasks}</p>
                </div>

                <div className="bg-yellow-100 px-3 py-2 rounded-lg border border-yellow-400">
                    <p className="text-xs text-slate-700">Pending</p>
                    <p className="text-base font-semibold text-slate-900">{pendingTasks}</p>
                </div>

                <div className="bg-blue-100 px-3 py-2 rounded-lg border border-blue-400">
                    <p className="text-xs text-slate-700">In progress</p>
                    <p className="text-base font-semibold text-slate-900">{inProgressTasks}</p>
                </div>
            </div>

            <form className="flex items-center gap-3">
                <label htmlFor="sort" className="text-base font-medium text-slate-800">Sort by</label>
                <select
                    name="sort"
                    id="sort"
                    className="border border-slate-400 px-4 py-2 rounded-lg bg-white text-base shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleSortChange}
                >
                    {shortByOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </form>
        </div>

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