import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'conversao',
  synchronize: false,
  logging: false,
  entities: ['./src/database/entity/**/*.ts'],
  migrations: ['./src/database/migration/**/*.ts'],
  subscribers: ['./src/database/subscriber/**/*.ts'],
  cli: {
    entitiesDir: './src/database/entity',
    migrationsDir: './src/database/migration',
    subscribersDir: './src/database/subscriber',
  },
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
