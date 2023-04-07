import { Program } from "src/programs/entities/program.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Klass {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  season!: string;

  @Column()
  name!: string;

  @OneToMany(() => Program, (program) => program.klass)
  programs!: Program[];
}
