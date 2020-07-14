/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Logger } from '@overnightjs/logger';
import { Role } from './entity/Role';

export const connectDB = (): void => {
  createConnection()
    .then(async (connection) => {
      Logger.Imp('Inserting a new user into the database...');
      const role = new Role();
      role.roleName = 'Admin';
      await connection.manager.save(role);
      Logger.Imp('Saved a new user with id: ' + role.id);

      Logger.Imp('Loading users from the database...');
      const roles = await connection.manager.find(Role);
      Logger.Imp('Loaded users: ' + roles);

      Logger.Imp('Here you can setup and run express/koa/any other framework.');
    })
    .catch((error) => Logger.Imp(error));
};
