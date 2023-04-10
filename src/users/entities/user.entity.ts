import { ProgramSubmission } from "src/program-submissions/entities/program-submission.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column()
  eid!: string;

  @Column({ default: true })
  isActive!: boolean;

  @OneToMany(
    () => ProgramSubmission,
    (programSubmission) => programSubmission.user,
  )
  programSubmissions!: ProgramSubmission[];
}
