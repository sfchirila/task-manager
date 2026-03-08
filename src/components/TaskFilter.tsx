export function TaskFilter() {
	const TASK_PRIORITIES_OPTIONS = ['all', 'low', 'medium', 'high'];
	const TASK_STATUS_OPTIONS = ['all', 'pending', 'in-progress', 'completed'];

    return (
        <>
			<form className="space-y-5 bg-white shadow p-10 rounded-lg">
				<h2 className="text-xl font-bold">Filter Tasks</h2>
				<div className="flex gap-6 w-full">
					<div className="flex flex-col gap-2 w-1/3">
						<label htmlFor="taskName" className="font-medium">Name</label>
						<input
							type="text"
							id="taskName"
							className="border border-slate-300 p-2 rounded-lg w-full"
							placeholder="Enter task name"
						/>
					</div>

					<div className="flex flex-col gap-2 w-1/3">
						<label htmlFor="status" className="font-medium">Status</label>
						<select
							name="status"
							id="status"
							className="border border-slate-300 p-2 rounded-lg bg-white w-full"
						>
							{TASK_STATUS_OPTIONS.map((option) => (
								<option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
							))}
						</select>
					</div>

					<div className="flex flex-col gap-2 w-1/3">
						<label htmlFor="priority" className="font-medium">Priority</label>
						<select
							name="priority"
							id="priority"
							className="border border-slate-300 p-2 rounded-lg bg-white w-full"
						>
							{TASK_PRIORITIES_OPTIONS.map((option) => (
								<option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
							))}
						</select>
					</div>

				</div>

				<input
					type="submit"
					value="Filter Tasks"
					id="filterButton"
					className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white rounded-lg cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
				/>

			</form>
        </>
    )
}