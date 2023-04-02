import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column("datetime")
  submittedDate!: Date;
}
