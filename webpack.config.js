//Konfiguracja Webpack
module.exports = {
  output: { filename: "./dist/out.js" },
    entry: "./js/Script.jsx",
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            }
        ]
    }
}
