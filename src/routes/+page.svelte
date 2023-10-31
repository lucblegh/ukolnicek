<script>
	import { fade } from 'svelte/transition'
	import { todos, addTodo, deleteTodo } from '../lib/stores'
	let todo = ''

	const handleSubmit = () => {
		if (todo) {
			addTodo(todo)
		} else {
			alert('Zadej úlohu!')
		}
		todo = ''
	}
</script>

<div class="w-screen h-screen flex flex-col items-center py-5">
	<div class="w-[90%] max-w-md rounded-lg overflow-hidden shadow-xl">
		<div class="text-xl text-center text-white bg-slate-800 py-5"><h1>Úkolovník v1.0.0 💀</h1></div>
		<form class="w-full flex flex-col md:flex-row bg-slate-600 p-6 gap-2" on:submit|preventDefault={handleSubmit}>
			<input class="bg-slate-700 p-2 rounded-md text-white flex-1" placeholder="Zadej úkol....." type="text" bind:value={todo} />
			<button class="bg-slate-700 p-2 rounded-md text-white" type="submit">Přidat úkol</button>
		</form>

		<ul class="w-full bg-slate-200 text-white p-6 min-h-[300px]">
			{#if !$todos.length}
				<h1 class="text-slate-700 text-center">Čekám na úkoly...</h1>
			{/if}
			{#each $todos as todo}
				<li class="flex items-center rounded-md justify-between my-2 p-2 bg-slate-500 shadow-xl" in:fade out:fade>
					<p>{todo.text}</p>
					<button
						class="bg-green-500 py-2 px-4 rounded-md text-white"
						type="button"
						on:click={() => {
							deleteTodo(todo.id)
						}}>Splněno</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
