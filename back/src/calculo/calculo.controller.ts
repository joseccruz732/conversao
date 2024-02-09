import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculoService } from './calculo.service';
import { CreateCalculoDto } from './dto/create-calculo.dto';
import { UpdateCalculoDto } from './dto/update-calculo.dto';

@Controller('calculo')
export class CalculoController {
  constructor(private readonly calculoService: CalculoService) {}

  @Post()
  create(@Body() createCalculoDto: CreateCalculoDto) {
    return this.calculoService.create(createCalculoDto);
  }

  @Get()
  findAll() {
    return this.calculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalculoDto: UpdateCalculoDto) {
    return this.calculoService.update(+id, updateCalculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calculoService.remove(+id);
  }
}
