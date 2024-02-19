import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Conversion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column({ type: 'float' })
  inputValue: number;

  @Column({ type: 'float' })
  result: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
