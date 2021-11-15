const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'pcTamperMonkey.js',
        path: path.join(__dirname, 'dist'),
        library: 'PCTamperMonkey',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',

    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env' ]
                }
            },
            exclude: /node_modules/,
        }]
    }
};
