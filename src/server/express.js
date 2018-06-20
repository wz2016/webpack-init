import express from "express";
import path from "path";

const server = express();
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(
  compiler
);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware); // after dev middleware

const staticMiddleware = express.static('dist');

server.use(staticMiddleware); // express to have route

server.listen(8080, () => {
  console.log('Server Start')
})
