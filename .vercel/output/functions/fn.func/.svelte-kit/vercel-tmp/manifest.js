export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b54138cb.js","app":"_app/immutable/entry/app.7db2bbe1.js","imports":["_app/immutable/entry/start.b54138cb.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/singletons.64179bb6.js","_app/immutable/chunks/index.ba2d21ea.js","_app/immutable/entry/app.7db2bbe1.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.3ec8be6c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();