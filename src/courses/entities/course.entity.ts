import { Klass } from "src/klasses/entities/klass.entity";
import { Program } from "src/programs/entities/program.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique(["klass", "number"])
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Program, (program) => program.course)
  programs!: Program[];

  @ManyToOne(() => Klass, (klass) => klass.courses, { nullable: false })
  @JoinColumn()
  klass!: Klass;

  @Column()
  number!: number;

  @Column("varchar")
  title!: string;
}
