import app from './server';
import { dbConnection } from './db-connection';
import { Logger } from '@overnightjs/logger';

dbConnection
  .then(() => {
    Logger.Imp('Successful Connection to the Database');
  })
  .catch((error) => {
    Logger.Err(error);
  });

const PORT = process.env.PORT || 3000;
const SERVER_START_MESSAGE = 'Phantom server started on port:';

app.listen(PORT, () => {
  Logger.Imp(`${SERVER_START_MESSAGE} ${PORT}`);
});
