const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test:/\.(ts|tsx)$/,
                exclude:/node_modules/,
                use:{
                    loader: "ts-loader"
                }
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    stats:{
        children:true,
    },
    plugins:[
        new HtmlWebpackPlugin( options={
            template:'./src/index.html'
        })
    ],
    
}