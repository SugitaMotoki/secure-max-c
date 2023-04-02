import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  classId!: number;

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
