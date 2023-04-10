import { Compile } from "src/compile/entities/compile.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ProgramSubmission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  programId!: number;

  @Column("varchar")
  fileName!: string;

  @Column("text")
  source!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @OneToOne(() => Compile, (compile) => compile.programSubmission)
  @JoinColumn()
  compile!: Compile;
}
