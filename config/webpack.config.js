const path = require("path")

module.exports = {
    mode: "none",
    entry: "./src/index.ts",
    target: "node",
    output: {
        path: path.resolve(__dirname, "../", "bin"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["babel-loader", "ts-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
}