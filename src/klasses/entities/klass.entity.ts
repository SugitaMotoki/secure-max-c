import { Program } from "src/programs/entities/program.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Klass {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  season!: string;

  @Column()
  name!: string;

  @OneToOne(() => Program, (program) => program.klass)
  program!: Program;
}
