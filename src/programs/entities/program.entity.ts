import { Klass } from "src/klasses/entities/klass.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Klass, (klass) => klass.program)
  @JoinColumn()
  klass!: Klass;

  @Column()
  courseNumber!: number;

  @Column()
  levelId!: number;

  @Column()
  exerciseNumber!: number;

  @Column("varchar")
  title!: string;

  @Column("text")
  html!: string;
}
