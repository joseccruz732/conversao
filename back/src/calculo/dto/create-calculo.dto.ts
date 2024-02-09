import { IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateCalculoDto {
  @IsNumber()
  readonly id: number;

  @IsNumber()
  readonly valor: number;

  @IsString()
  readonly tipo_medida_1: string;

  @IsString()
  readonly tipo_medida_2: string;

  @IsNumber()
  readonly result: number;

  @IsDateString()
  readonly created_at: Date;

  @IsDateString()
  readonly updated_at: Date;
}
