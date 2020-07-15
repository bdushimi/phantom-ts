import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @PrimaryColumn()
  name!: string;
}

export default Role;
