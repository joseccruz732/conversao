import { Test, TestingModule } from '@nestjs/testing';
import { CalculoService } from './calculo.service';

describe('CalculoService', () => {
  let service: CalculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculoService],
    }).compile();

    service = module.get<CalculoService>(CalculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
