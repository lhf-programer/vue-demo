// vue.config.js
module.exports = {
    devServer: {
        open: true,
        port: 9527,
        proxy: {
            '^/api': {
                target: 'localhost:8765',
                changeOrigin: true
            }
        }
    }
}