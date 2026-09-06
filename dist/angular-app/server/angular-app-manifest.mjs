
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
    "route": "/brand"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/camiseta-tactica-mtf-alpha-9"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/manilla-identificacion-mtf-vanguard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/vaso-termico-mtf-omega-7-hammer-down"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/taza-tactica-mtf-alpha-1-ceramica-carbon"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/hoodie-tactico-mtf-blackout-operador"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/manilla-paracord-militar-mtf-grillete-titanio"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JJF3P65I.js",
      "chunk-X74GXWC3.js"
    ],
    "route": "/brand/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21783, hash: '7cec493006ce540fec2284ddc33220f9206b9737f8d13661a12b380c3a5bb5e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20451, hash: '2e84adb7c6c2af9d5a343a7f33f29f1c33b8472fb022f21488294a0229a5ddcc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'brand/index.html': {size: 42344, hash: '5c81a4cf600eb55f87a4f077ee4836a9d1673b5edaf0addf7e0840d39e2a1c2f', text: () => import('./assets-chunks/brand_index_html.mjs').then(m => m.default)},
    'brand/camiseta-tactica-mtf-alpha-9/index.html': {size: 70832, hash: 'f62a55cded8fe8f0fce504988666d70f7aaffaec371d7241a3647608648bdbd6', text: () => import('./assets-chunks/brand_camiseta-tactica-mtf-alpha-9_index_html.mjs').then(m => m.default)},
    'brand/manilla-identificacion-mtf-vanguard/index.html': {size: 75853, hash: '935d2539f8470072939abd0204be509076c9bca4d64be5713cd1a11165fd57c2', text: () => import('./assets-chunks/brand_manilla-identificacion-mtf-vanguard_index_html.mjs').then(m => m.default)},
    'brand/vaso-termico-mtf-omega-7-hammer-down/index.html': {size: 70635, hash: 'a1c07148399f7887a97cdce476baef074545390770c1b332539b50ce1b974259', text: () => import('./assets-chunks/brand_vaso-termico-mtf-omega-7-hammer-down_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103968, hash: '2bdc032ecc26ecf2b0be0aaa938fa02454fe47e614957524bd1313f489a38782', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'brand/taza-tactica-mtf-alpha-1-ceramica-carbon/index.html': {size: 70415, hash: 'ba36eef0bd74480cde046416774299f3ab71ea1e87aeb8497e7f0acc96d3062e', text: () => import('./assets-chunks/brand_taza-tactica-mtf-alpha-1-ceramica-carbon_index_html.mjs').then(m => m.default)},
    'brand/manilla-paracord-militar-mtf-grillete-titanio/index.html': {size: 75861, hash: '351a6717e82f81794188c126612e8053366cf30cc959484d04b60d2cf6e0ff52', text: () => import('./assets-chunks/brand_manilla-paracord-militar-mtf-grillete-titanio_index_html.mjs').then(m => m.default)},
    'brand/hoodie-tactico-mtf-blackout-operador/index.html': {size: 70517, hash: 'c3a5921f0207d7f52d78c48fb9fb5cf0becea36b8ed871784a0e7375627112d3', text: () => import('./assets-chunks/brand_hoodie-tactico-mtf-blackout-operador_index_html.mjs').then(m => m.default)},
    'styles-C7U3CXSS.css': {size: 4893, hash: 'n2nYpgtHIqA', text: () => import('./assets-chunks/styles-C7U3CXSS_css.mjs').then(m => m.default)}
  },
};
