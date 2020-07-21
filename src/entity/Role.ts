import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name' })
  name!: string;
}

export default Role;
