import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalculoDto } from './dto/create-calculo.dto';
import { UpdateCalculoDto } from './dto/update-calculo.dto';
import { Repository } from 'typeorm';
import { Calculo } from './entities/calculo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CalculoService {
  constructor(
    @InjectRepository(Calculo)
    private readonly calculoRepository: Repository<Calculo>,
  ) {}

  async findAll() {
    return this.calculoRepository.find();
  }

  async findOne(id: number) {
    const calculo = await this.calculoRepository.findOne({
      where: { id },
    });
    if (!calculo) {
      throw new NotFoundException(`Calculo #${id} Not Found`);
    }
    return calculo;
  }

  async create(createCalculoDto: CreateCalculoDto) {
    const calculo = this.calculoRepository.create(createCalculoDto);

    return this.calculoRepository.save(calculo);
  }

  async update(id: number, updateCalculoDto: UpdateCalculoDto) {
    const calculo = await this.calculoRepository.preload({
      ...updateCalculoDto,
      id,
    });
    if (!calculo) {
      throw new NotFoundException(`Calculo #${id} Not Found`);
    }

    return this.calculoRepository.save(calculo);
  }

  async remove(id: number) {
    const calculo = await this.calculoRepository.findOne({
      where: { id },
    });
    if (!calculo) {
      throw new NotFoundException(`Calculo #${id} Not Found`);
    }

    return this.calculoRepository.remove(calculo);
  }
}
