
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/build-project/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2202, hash: '370791be7a9bb14a85ad5a2d1b06c9758a1e4dce5345a1cb733223f8c0d9b398', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: '0d849d794c7c310f8ab113c2bce266dff9ac5be68ada1b35dead7d0219147c44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-K7W3GPIL.css': {size: 10308, hash: 'iuG0OiLS4l0', text: () => import('./assets-chunks/styles-K7W3GPIL_css.mjs').then(m => m.default)}
  },
};
