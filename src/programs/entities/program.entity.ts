import { Klass } from "src/klasses/entities/klass.entity";
import { Level } from "src/levels/entities/level.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Klass, (klass) => klass.programs, { nullable: false })
  @JoinColumn()
  klass!: Klass;

  @Column()
  courseNumber!: number;

  @ManyToOne(() => Level, (level) => level.programs, { nullable: false })
  @JoinColumn()
  level!: Level;

  @Column()
  exerciseNumber!: number;

  @Column("varchar")
  title!: string;

  @Column("text")
  html!: string;
}
