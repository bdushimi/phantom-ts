import app from './server';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import * as config from './ormconfig';
import { Logger } from '@overnightjs/logger';

dotenv.config();
/** Create a connection to the database */
void (async () => {
  try {
    await createConnection(config);
    Logger.Imp('Successful Connection to the Database');
  } catch (error) {
    Logger.Err('Error while connecting to the database', error);
  }
})();

const PORT = process.env.PORT || 3000;
const SERVER_START_MESSAGE = 'Phantom server started on port:';

/** Start the application server */
app.listen(PORT, () => {
  Logger.Imp(`${SERVER_START_MESSAGE} ${PORT}`);
});
