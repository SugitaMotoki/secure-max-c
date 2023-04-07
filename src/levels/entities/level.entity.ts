import { Program } from "src/programs/entities/program.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  value!: string;

  @OneToMany(() => Program, (program) => program.level)
  programs!: Program[];
}
