import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Compile {
  @PrimaryGeneratedColumn()
  id!: number;

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
