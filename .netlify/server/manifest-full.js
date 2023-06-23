export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/AURORA-PRO.otf","fonts/Kilo.otf","fonts/Kilo.ttf","fonts/Quicksand.ttf","fonts/Vanosky.otf"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.f6121a69.js","app":"_app/immutable/entry/app.55edd1d0.js","imports":["_app/immutable/entry/start.f6121a69.js","_app/immutable/chunks/index.d27b44d9.js","_app/immutable/chunks/singletons.cbb39648.js","_app/immutable/chunks/index.294f2532.js","_app/immutable/entry/app.55edd1d0.js","_app/immutable/chunks/index.d27b44d9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/d",
				pattern: /^\/d\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
