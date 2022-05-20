<script setup>
	import { useTodosStore } from '@/stores/todos';
	import { storeToRefs } from 'pinia';
	import { ref } from "vue";

	const todoInput = ref('');

	const todosStore = useTodosStore();

	const { todos, completedTodos } = storeToRefs(todosStore);

	function addTodoItem() {
		todosStore.addTodo(todoInput.value);
		todoInput.value = '';
	}

</script>

<template>
	<h1>All To-Do Items:</h1>

	<ul>
		<li 
			v-for="todo in todos"
			:class="{'completed': todo.completed }"
		>
			{{ todo.name }}
		</li>
	</ul>

	<h1>Done:</h1>
	
	<ul>
		<li 
			v-for="todo in completedTodos"
			:class="{'completed': todo.completed }"	
		>
			{{ todo.name }}
		</li>
	</ul>

	<input type="text" v-model="todoInput">
	<button @click="addTodoItem">Add Item</button>

</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
	font-size: 1.5rem;
}

ul {
	margin-left: 2.5rem;
}

li {
	font-weight: bold;
}

.completed {
	color: green;
}

</style>
