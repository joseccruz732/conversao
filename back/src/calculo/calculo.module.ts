import { Module } from '@nestjs/common';
import { CalculoService } from './calculo.service';
import { CalculoController } from './calculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calculo } from './entities/calculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calculo])],
  controllers: [CalculoController],
  providers: [CalculoService],
})
export class CalculoModule {}
