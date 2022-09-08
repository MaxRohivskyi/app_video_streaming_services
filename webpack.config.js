const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: "dist",
        filename: 'compiled.js',
        path: path.resolve(__dirname, 'dist')
    }
}
