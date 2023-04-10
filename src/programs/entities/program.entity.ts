import { Course } from "src/courses/entities/course.entity";
import { Level } from "src/levels/entities/level.entity";
import { ProgramSubmission } from "src/program-submissions/entities/program-submission.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Course, (course) => course, { nullable: false })
  course!: Course;

  @ManyToOne(() => Level, (level) => level.programs, { nullable: false })
  @JoinColumn()
  level!: Level;

  @Column()
  exerciseNumber!: number;

  @Column("varchar")
  title!: string;

  @Column("text")
  html!: string;

  @OneToMany(
    () => ProgramSubmission,
    (programSubmission) => programSubmission.program,
  )
  programSubmissions!: ProgramSubmission[];
}
