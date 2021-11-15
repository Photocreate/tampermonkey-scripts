const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        "PCTamperMonkey": ["./src/pcTamperMonkey.js"]
    },
    output: {
        filename: 'pcTamperMonkey.js',
        path: path.join(__dirname, 'dist'),
        library: 'PCTamperMonkey',
        libraryTarget: 'umd',
        libraryExport: 'PCTamperMonkey',
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
