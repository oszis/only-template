const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    data: path.join('src', 'data'),
};

const pages = JSON.parse(fs.readFileSync('pages.json')
    .toString())
    .map(pageData => new HtmlWebpackPlugin({
        title: pageData.title,
        filename: path.join(PATHS.build, `${pageData.name}.html`),
        template: path.join('src', 'pages', pageData.name, `${pageData.name}.pug`),
        chunks: pageData.name === ['common', 'vendors'],
    }));

const data = {};
fs.readdirSync(PATHS.data)
    .forEach((file) => {
        const dataSetName = file.replace(/\.[^.]*$/, '');
        try {
            data[dataSetName] = JSON.parse(fs.readFileSync(path.join(PATHS.data, file)));
        } catch (e) {
        }
    });

module.exports = function (env, argv) {
    return {
        externals: {
            paths: PATHS,
        },
        entry: {
            common: `${PATHS.src}/common/js/common.js`,
        },
        output: {
            path: PATHS.build,
            filename: argv.mode === 'development' ? 'js/[name].js' : 'js/[name].[hash:8].js',
            publicPath: '/',
        },
        optimization: {
            minimizer: [new UglifyJsPlugin()],
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attrs: ['link:href', ':src', ':data-src', ':data-main-src', ':data-hover-src', ':srcset', ':data-srcset', ':data-bg-src', ':data-srcset', 'video:src'],
                                interpolate: true,
                            },
                        },
                        {
                            loader: 'pug-html-loader',
                            options: {
                                data: { data },
                            },
                        },
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true },
                        }, {
                            loader: 'postcss-loader',
                            options: { sourceMap: true, config: { path: './postcss.config.js' } },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true },
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true, config: { path: './postcss.config.js' } },
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|mp4)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                        },
                    ],
                },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            ],
        },
        node: { fs: 'empty' },
        target: 'web',
        plugins: [
            new CleanWebpackPlugin(),
            ...pages,
            new SpriteLoaderPlugin({ plainSprite: true }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
            new MiniCssExtractPlugin({
                filename: argv.mode === 'development' ? 'css/[name].css' : 'css/[name].[hash:8].css',
            }),
            // new BundleAnalyzerPlugin(),
        ],
        devServer: {
            host: '0.0.0.0',
            setup(app) {
                app.post('*', (req, res) => {
                    res.send('POST res sent from webpack dev server');
                });
            },
        },
        resolve: {
            alias: {
                TweenMax: path.resolve(
                    'node_modules',
                    'gsap/src/minified/TweenMax.min.js',
                ),
                TweenLite: path.resolve(
                    'node_modules',
                    'gsap/src/minified/TweenLite.min.js',
                ),
                TimelineMax: path.resolve(
                    'node_modules',
                    'gsap/src/minified/TimelineMax.min.js',
                ),
                ScrollToPlugin: path.resolve(
                    'node_modules',
                    'gsap/src/minified/plugins/ScrollToPlugin.min.js',
                ),
                ScrollMagic: path.resolve(
                    'node_modules',
                    'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
                ),
                'debug.addIndicators': path.resolve(
                    'node_modules',
                    'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
                ),
                'animation.gsap': path.resolve(
                    'node_modules',
                    'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
                ),
            },
        },
    };
};
