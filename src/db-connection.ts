import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Role from './entity/Role';

export const dbConnection = createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'developer',
  password: 'developer@123',
  database: 'Phantom-dev',
  synchronize: true,
  logging: false,
  entities: [Role],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
});
