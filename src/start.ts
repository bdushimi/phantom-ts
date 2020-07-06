import PhantomServer from './server';
import { Logger } from '@overnightjs/logger';

const server = new PhantomServer();
server.start(5555);
Logger.Imp('Phantom server started in development mode');
