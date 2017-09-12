import path from 'path';

const config = new Map();

config.set('port', 8888);
config.set('staticDir', path.join(__dirname, '..', 'public'));
config.set('viewsDir', path.join(__dirname, '..', 'views'));

export default config;