import http from 'node:http';
import { env } from './env.js';
import { createServerApplication } from './app/index.js';

const server = http.createServer(createServerApplication());

server.listen(env.PORT, () => {
    console.log(`Server is running at http://localhost:${env.PORT}`);
});