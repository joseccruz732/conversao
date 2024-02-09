import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('calculos')
export class Calculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  tipo_medida_1: string;

  @Column()
  tipo_medida_2: string;

  @Column()
  result: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
