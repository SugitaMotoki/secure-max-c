import { Klass } from "src/klasses/entities/klass.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
@Unique(["klass", "number"])
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Klass, (klass) => klass.courses, { nullable: false })
  @JoinColumn()
  klass!: Klass;

  @Column()
  number!: number;

  @Column("varchar")
  title!: string;
}
