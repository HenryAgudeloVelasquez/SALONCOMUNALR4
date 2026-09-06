
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17003, hash: '3af0c94c5c3b42a8fce246eca7c4445bf8c54a9e180b3dd424699087ff0e56c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15908, hash: '529f7329361efc5439d46f92e48058c848d95c6123e4e9b9a39056546be42c99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105312, hash: 'eee99098ec64aed99b08b6ba173753b841c27709dae3a229c793bb69619d6b29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3I5I3WDF.css': {size: 15988, hash: 'AAbMv0BJ5fY', text: () => import('./assets-chunks/styles-3I5I3WDF_css.mjs').then(m => m.default)}
  },
};
