const path = require('path');

module.exports = [
    {
        name: 'client',
        mode: 'development',
        entry: './src/react/index.js',
        output: {
            path: path.resolve(__dirname, './public/assets/js'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.json', '.mjs'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@comp': path.resolve(__dirname, 'src/react/components'),
                '@shared': path.resolve(__dirname, 'src/shared')
            }
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                "@babel/preset-react"
                            ],
                            "plugins": ["@babel/plugin-transform-runtime"]
                        }
                    }

                },
                {
                    test: /\.(png|jpe?g|gif|mp3)$/i,
                    type: 'asset/resource',
                    exclude: /node_modules/
                }
            ]
        }   
    }
]