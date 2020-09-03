import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
let config: ConnectionOptions;

/**
 * Check the current environment and return a corresponding connection options
 */

if (process.env.NODE_ENV === process.env.STAGING) {
  config = {
    type: 'postgres',
    host: process.env.TEST_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DATABASE,
    synchronize: false,
    logging: false,
    entities: [__dirname + '/entity/**/*{.ts,.js}'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
    },
  };
} else {
  config = {
    type: 'postgres',
    host: process.env.DEV_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    synchronize: false,
    logging: false,
    entities: [__dirname + '/entity/**/*{.ts,.js}'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
    },
  };
}

export = config;
