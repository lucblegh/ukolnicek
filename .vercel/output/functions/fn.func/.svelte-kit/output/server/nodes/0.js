

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.caf6e289.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.3ec8be6c.js"];
export const stylesheets = ["_app/immutable/assets/0.379a889f.css"];
export const fonts = [];
