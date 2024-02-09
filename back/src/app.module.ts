import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CalculoModule } from './calculo/calculo.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [DatabaseModule, CalculoModule, EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
