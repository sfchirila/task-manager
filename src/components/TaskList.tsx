import type { Task } from "../types"

type TaskListProps = {
    tasks: Task[]
}

export default function TaskList({tasks}: TaskListProps) {
    return (
        <>
            <h2 className="text-4xl font-bold pb-5">Task list</h2>

            { tasks.length === 0 ? <p className="text-center text-gray-600 py-10">No tasks created yet</p> :
                tasks.map(task => (
                    <div key={task.id} className="p-5 bg-white mt-4 flex justify-between items-start rounded-lg border border-gray-400 shadow-lg">
                        <div className="space-y-1">
                            <h3 className="text-3xl font-semibold text-gray-900">{task.taskTitle}</h3>
                            <p className="text-lg text-gray-700">{task.taskDescription}</p>

                            <div className="flex gap-4 text-sm text-gray-600 pt-4">
                                <span>Status: <strong className="text-gray-900 font-medium">{task.status}</strong></span>
                                <span>Priority: <strong className="text-gray-900 font-medium">{task.taskPriority}</strong></span>
                                <span>Created: <strong className="text-gray-900 font-medium">{new Date(task.createdAt).toLocaleDateString()}</strong></span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}