

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f382b922.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.3ec8be6c.js","_app/immutable/chunks/index.ba2d21ea.js"];
export const stylesheets = [];
export const fonts = [];
