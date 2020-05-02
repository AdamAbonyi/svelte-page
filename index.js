/* eslint-disable */
const { startServers } = require('./server')

const defaults = {
    host: 'localhost',
    distDir: 'dist',
    entrypoint: '__app.html',
    app: `build/bundle.js`,
    spaPort: 5000,
    ssrPort: 5005,
    serveSpa: false,
    serveSsr: true,
}

startServers(defaults)