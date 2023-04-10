import { Compile } from "src/compile/entities/compile.entity";
import { Program } from "src/programs/entities/program.entity";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ProgramSubmission {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.programSubmissions, { nullable: false })
  user!: User;

  @ManyToOne(() => Program, (program) => program.programSubmissions, {
    nullable: false,
  })
  program!: Program;

  @Column()
  programId!: number;

  @Column("varchar")
  fileName!: string;

  @Column("text")
  source!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @OneToOne(() => Compile, { nullable: false })
  @JoinColumn()
  compile!: Compile;
}
