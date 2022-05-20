import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTodosStore = defineStore('todos', {
	state: () => ({
		todos: [{
			id: 1,
			name: "Fix Bugs",
			completed: true,
		},
		{
			id: 2,
			name: "Fix Bugs Again",
			completed: false,
		},
		{
			id: 3,
			name: "Find Bugs",
			completed: true,
		},

	]
	}),
	getters: {
		completedTodos: (state) => {
			return state.todos.filter(todo => todo.completed);
		}
	},
	actions: {
		addTodo(name) {
			this.todos.push({
				id: Math.random() * 10,
				name,
				completed: false,
			});
		}
	},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot))
}