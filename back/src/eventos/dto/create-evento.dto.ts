import { IsObject, IsDateString } from 'class-validator';

export class CreateEventoDto {
  @IsObject()
  readonly metadata: object;

  @IsDateString()
  readonly createdAt: Date;

  @IsDateString()
  readonly updatedAt: Date;
}
