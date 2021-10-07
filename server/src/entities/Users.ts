import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

Entity()//table DB
export class Users {

  @PrimaryGeneratedColumn('increment')
  id!: number;
 
  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;
}
