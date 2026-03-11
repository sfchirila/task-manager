import { useEffect, useReducer, useState } from "react"

import { TaskForm } from "./components/TaskForm"
import { taskReducer, initialState } from "./reducers/task-reducer"
import { TaskList } from "./components/TaskList";
import { TaskFilter } from "./components/TaskFilter";
import { useFilteredTasks } from './hooks/useFilteredTasks'

import type { SortByOption, Task, TaskFilters } from "./types";
import { UserIcon } from "@heroicons/react/16/solid";

function App() {

	const [state, dispatch] = useReducer(taskReducer, initialState);
	const [editingTask, setEditingTask] = useState<Task | null>(null);
	const [filteredTasks, setFilteredTasks] = useState<TaskFilters>({
		taskName: '',
		status: 'all',
		priority: 'all'
	});
	const [sortBy, setSortBy] = useState<SortByOption>('createdAt');

	const { filtered } = useFilteredTasks({tasks: state.tasks, filters: filteredTasks, sortBy});

	useEffect(() => {
    	localStorage.setItem('tasks', JSON.stringify(state.tasks))
  	}, [state.tasks]);

return (
  	<>
		<header className="bg-slate-800 relative py-3 px-4">
			<h1 className="text-center text-lg font-bold text-white uppercase tracking-wide">Task Manager</h1>

			<a href="/login" className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm font-medium text-white hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
				<UserIcon className="w-5 h-5" aria-hidden="true" />
				<span>Login</span>
			</a>
		</header>

		<main className="bg-gray-100 min-h-screen">
			<section className="bg-slate-50 pt-10 px-5" aria-label="Task creation form">
				<div className="max-w-4xl mx-auto">
					<TaskForm
						editingTask={editingTask}
						onClearEdit={() => setEditingTask(null)}
						dispatch={dispatch}
					/>
				</div>
			</section>

			<section className="bg-slate-50 py-10 px-5" aria-label="Filters">
				<div className="max-w-4xl mx-auto">
					<TaskFilter
						setFilteredTasks={setFilteredTasks}
					/>
				</div>
			</section>

			<section className='bg-slate-50 pb-10 px-5' aria-label="Task list">
					<TaskList
						tasks={filtered}
						dispatch={dispatch}
						setEditingTask={setEditingTask}
						setSortBy={setSortBy}
					/>
			</section>
		</main>
    </>
  )
}

export default App
