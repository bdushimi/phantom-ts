import app from './server';
import { connectDB } from './database';
import { Logger } from '@overnightjs/logger';

const PORT = process.env.PORT || 3000;
const SERVER_START_MESSAGE = 'Phantom server started on port : ';

connectDB();
app.listen(PORT, () => {
  Logger.Imp(`${SERVER_START_MESSAGE} ${PORT}`);
});
