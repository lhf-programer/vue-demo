// vue.config.js
module.exports = {
    outputDir: 'dist',
    lintOnSave: false, // 关注eslint
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