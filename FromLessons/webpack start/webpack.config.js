const path = require('path')

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist"),
        },
    },
}