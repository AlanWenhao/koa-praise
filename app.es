import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import co from 'co';
import server from 'koa-static';
import 'babel-register';
import 'babel-polyfill';

import config from './config/config';
import initController from './controller/initController';

const app = new Koa();

initController.init(app, router);

app.use(server(config.get('staticDir')));

app.context.render = co.wrap(render({
    root: config.get('viewsDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));

app.listen(config.get('port'), () => {
    console.log('接口已启动');
});