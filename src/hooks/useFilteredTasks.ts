import { useMemo } from "react";

import type { Task, TaskFilters } from "../types/index";

type useFilteredTasksReturnType = {
    tasks: Task[]
    filters: TaskFilters
};
export function useFilteredTasks({tasks, filters} : useFilteredTasksReturnType) {

    const filtered = useMemo(() => {
        return tasks.filter((task) => {
			const matchesName = task.taskTitle.toLowerCase().includes(filters.taskName.toLowerCase());
			const matchesStatus = filters.status === 'all' || task.status === filters.status;
			const matchesPriority = filters.priority === 'all' || task.taskPriority === filters.priority;

			return matchesName && matchesStatus && matchesPriority;
		});
    }, [tasks, filters])

    return {
        filtered
    }

}