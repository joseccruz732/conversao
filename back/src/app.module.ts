import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConversionModule } from './modules/conversion/conversion.module';

@Module({
  imports: [DatabaseModule, ConversionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
