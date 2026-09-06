
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
    'index.csr.html': {size: 17298, hash: '49af4a1a37434b053e94a36907b2de06bddab83ca32d799242b95751f5848d47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16203, hash: '0318bf06757e024dbea7da69dd6ae054cd59eb932d693e29e8e8af6ff30e38b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105836, hash: '3b797bc6019a8c5a11f1cf72d60f0404e4f2039d6f8b959939d22a6d40910f8d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3I5I3WDF.css': {size: 15988, hash: 'AAbMv0BJ5fY', text: () => import('./assets-chunks/styles-3I5I3WDF_css.mjs').then(m => m.default)}
  },
};
