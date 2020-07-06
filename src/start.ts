import app from './server';
import { Logger } from '@overnightjs/logger';

const PORT = 3000;
const SERVER_START_MESSAGE = 'Phantom server started on port : ';

app.listen(PORT, () => {
  Logger.Imp(`${SERVER_START_MESSAGE} ${PORT}`);
});
