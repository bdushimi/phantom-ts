import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as bodyParser from 'body-parser';
import { UserController } from './controllers/UserController';

export default class PhantomServer extends Server {
  private readonly SERVER_START_MESSAGE = 'Phantom server started on port : ';

  constructor() {
    super(true);

    // this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  private setupControllers(): void {
    const userController = new UserController();
    super.addControllers([userController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp(`${this.SERVER_START_MESSAGE} ${port}`);
    });
  }
}
