module.exports={
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    devServer:{
        host:"0.0.0.0",
        port:1234,
        inline:true
    },
    module:{
        loaders:[
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015','react']
                }
            },


            {
                test: /\.scss|.css$/,
                loader: ['style-loader','css-loader','sass-loader']
                 
            },
            {
                test: /\.jpe?g|png|gif|svg|woff|ttf|eot$/,
                loader:  ['url-loader']
              }
        ]
    }
}