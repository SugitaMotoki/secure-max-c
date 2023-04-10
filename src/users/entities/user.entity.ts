import { ProgramSubmission } from "src/program-submissions/entities/program-submission.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["eid"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

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
