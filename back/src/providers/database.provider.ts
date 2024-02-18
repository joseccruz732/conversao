import { dataSourceOptions } from 'src/database/database.module';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(dataSourceOptions);

      return dataSource.initialize();
    },
  },
];
