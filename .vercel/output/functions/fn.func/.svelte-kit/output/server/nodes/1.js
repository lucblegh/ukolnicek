

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e4f0d0dd.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.3ec8be6c.js","_app/immutable/chunks/singletons.64179bb6.js","_app/immutable/chunks/index.ba2d21ea.js"];
export const stylesheets = [];
export const fonts = [];
