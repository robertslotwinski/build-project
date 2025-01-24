
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2188, hash: '2e9f10f561f1fd99b9a7c2bb30f4080de6f2c393082bf37b8584208bdf5e6ffb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: 'ad61c72c33f93aa509bcd9b1ee4957d8012ca8572bca7725081a07cf329c36c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-K7W3GPIL.css': {size: 10308, hash: 'iuG0OiLS4l0', text: () => import('./assets-chunks/styles-K7W3GPIL_css.mjs').then(m => m.default)}
  },
};
