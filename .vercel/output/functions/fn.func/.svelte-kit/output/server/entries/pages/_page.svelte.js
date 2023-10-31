import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const todos = writable([]);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $todos, $$unsubscribe_todos;
  $$unsubscribe_todos = subscribe(todos, (value) => $todos = value);
  let todo = "";
  $$unsubscribe_todos();
  return `<div class="w-screen h-screen flex flex-col items-center py-5"><div class="w-[90%] max-w-md rounded-lg overflow-hidden shadow-xl"><div class="text-xl text-center text-white bg-slate-800 py-5" data-svelte-h="svelte-fq2cy5"><h1>Úkolovník v1.0.1 💀</h1></div> <form class="w-full flex flex-col md:flex-row bg-slate-600 p-6 gap-2"><input class="bg-slate-700 p-2 rounded-md text-white flex-1" placeholder="Zadej úkol....." type="text"${add_attribute("value", todo, 0)}> <button class="bg-slate-700 p-2 rounded-md text-white" type="submit" data-svelte-h="svelte-1wat8s7">Přidat úkol</button></form> <ul class="w-full bg-slate-200 text-white p-6 min-h-[300px]">${!$todos.length ? `<h1 class="text-slate-700 text-center" data-svelte-h="svelte-1keyslx">Čekám na úkoly...</h1>` : ``} ${each($todos, (todo2) => {
    return `<li class="flex items-center rounded-md justify-between my-2 p-2 bg-slate-500 shadow-xl"><p>${escape(todo2.text)}</p> <button class="bg-green-500 py-2 px-4 rounded-md text-white" type="button" data-svelte-h="svelte-12wv3x3">Splněno</button> </li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
