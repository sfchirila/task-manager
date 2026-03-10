import { useMemo } from "react";

import type { Task, TaskFilters } from "../types/index";

type useFilteredTasksReturnType = {
    tasks: Task[]
    filters: TaskFilters
    sortBy: string
};
export function useFilteredTasks({tasks, filters, sortBy} : useFilteredTasksReturnType) {

    const filtered = useMemo(() => {
        const filteredTasks = tasks.filter((task) => {
			const matchesName = task.taskTitle.toLowerCase().includes(filters.taskName.toLowerCase());
			const matchesStatus = filters.status === 'all' || task.status === filters.status;
			const matchesPriority = filters.priority === 'all' || task.taskPriority === filters.priority;

			return matchesName && matchesStatus && matchesPriority;
		})

        const sortedTasks = [...filteredTasks].sort((a, b) => {
            if (sortBy === 'createdAt') {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }

            if (sortBy === 'status') {
                const priorityOrder = ['pending', 'in-progress', 'completed'];
                return priorityOrder.indexOf(a.status) - priorityOrder.indexOf(b.status);
            }

            if (sortBy === 'taskPriority') {
                const priorityOrder = ['low', 'medium', 'high'];
                return priorityOrder.indexOf(b.taskPriority) - priorityOrder.indexOf(a.taskPriority);
            }
            return 0;
        });

        return sortedTasks;
    }, [tasks, filters, sortBy])

    return {
        filtered
    }

}