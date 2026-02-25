import { useReducer } from "react"

import { TaskForm } from "./components/TaskForm"
import { taskReducer, initialState } from "./reducers/activity-reducer"
import TaskList from "./components/TaskList";


function App() {

	const [state, dispatch] = useReducer(taskReducer, initialState);

return (
  	<>
		<header className="bg-slate-800 py-3">
			<div className="max-w-4xl mx-auto flex justify-center">
			<h1 className="text-center text-lg font-bold text-white uppercase">
				Task Manager
			</h1>
			</div>
		</header>

		<main className="bg-gray-100 min-h-screen">
			<section className="bg-slate-50 py-10 px-5" aria-label="Task creation form">
				<div className="max-w-4xl mx-auto">
					<TaskForm
						dispatch={dispatch}
					/>
				</div>
			</section>

			<section className='bg-white rounded-lg border border-gray-200 p-10 mx-auto max-w-4xl' aria-label="Task list">
				<TaskList
					tasks={state.tasks}
					dispatch={dispatch}
				/>
			</section>
		</main>
    </>
  )
}

export default App
