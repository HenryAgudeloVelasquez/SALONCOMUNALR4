
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
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
    'index.csr.html': {size: 4088, hash: '61cc8d39238e4ebd85f5b499cc9512c053f36cdb0a49d14bb3bc3371f5446b10', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4628, hash: '6c3c7b011017b7e3db7f0b01a662a73cf164ee6f3ff070f6281f3effd495b0e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81448, hash: 'a9a989bfcea620db516b79dabd621ef98817417e018d4bd6e0a987a1ba1a07c7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
