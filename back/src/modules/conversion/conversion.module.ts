import { Module } from '@nestjs/common';
import { ConversionController } from './conversion.controller';
import { ConversionService } from './conversion.service';
import { DataSource } from 'typeorm';
import { Conversion } from 'src/domain/entities/conversion.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConversionController],
  providers: [
    ConversionService,
    {
      provide: 'CONVERSION_REPOSITORY',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(Conversion),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class ConversionModule {}
