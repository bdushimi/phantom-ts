import app from './server';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import config  from './ormconfig';
import { Logger } from '@overnightjs/logger';

dotenv.config();
/** Create a connection to the database */
void (async () => {
  try {
    const connection = await createConnection(config);
    await connection.runMigrations();
    Logger.Imp('Successful Connection to the Database');
  } catch (err) {
    Logger.Err(`Error while connecting to the database : ${err}`);
  }
})();

const PORT = process.env.PORT || 3000;
const SERVER_START_MESSAGE = 'Phantom server started on port:';

/** Start the application server */
app.listen(PORT, () => {
  Logger.Imp(`${SERVER_START_MESSAGE} ${PORT}`);
});
