import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Klass {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  season!: string;

  @Column()
  name!: string;
}
