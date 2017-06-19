import {HelloWorld} from '@rdhariwal/fpm-web';
import {renderToString} from 'react-dom/server';
import renderHtml from './renderHtml';

export default (server) => {
    server.get('/', (req, res) => {
       res.status(200).send(renderHtml({body: renderToString(HelloWorld())}));
    });
    return server;
}
