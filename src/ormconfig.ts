import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
const config: ConnectionOptions = {
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

export = config;
