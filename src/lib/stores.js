import { writable } from 'svelte/store'

export const todos = writable([])

export const addTodo = (text) => {
	todos.update((current) => {
		const newTodos = [...current, { id: crypto.randomUUID(), text, completed: false }]
		return newTodos
	})
}

export const deleteTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id != id))
}
