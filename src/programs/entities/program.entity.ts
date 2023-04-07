import { Klass } from "src/klasses/entities/klass.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Klass, (klass) => klass.programs, { nullable: false })
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
