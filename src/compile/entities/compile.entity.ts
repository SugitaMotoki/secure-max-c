import { ProgramSubmission } from "src/program-submissions/entities/program-submission.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Compile {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => ProgramSubmission)
  programSubmission!: ProgramSubmission;

  @Column("bool")
  isSuccess!: boolean;

  @Column()
  exitCode!: number;

  @Column("text")
  stdout!: string;

  @Column("text")
  stderr!: string;

  @CreateDateColumn()
  createdDate!: Date;
}
