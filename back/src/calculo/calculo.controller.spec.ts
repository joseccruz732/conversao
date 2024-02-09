import { Test, TestingModule } from '@nestjs/testing';
import { CalculoController } from './calculo.controller';
import { CalculoService } from './calculo.service';

describe('CalculoController', () => {
  let controller: CalculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculoController],
      providers: [CalculoService],
    }).compile();

    controller = module.get<CalculoController>(CalculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
