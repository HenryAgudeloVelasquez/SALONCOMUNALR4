
export default {
  basePath: '/',
  allowedHosts: [
  "localhost",
  "localhost:*",
  "127.0.0.1",
  "127.0.0.1:*",
  "*.gtempurl.com",
  "*.gtempurl.com:*",
  "toyloko-001-site12.gtempurl.com",
  "*.smarterasp.net",
  "*.smarterasp.net:*",
  "*.railway.app",
  "*.up.railway.app"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
