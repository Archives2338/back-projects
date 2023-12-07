/* eslint-disable prettier/prettier */
import {

  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('increment')
  id_task: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('numeric', { default: 1 })
  state : number;


  @Column('numeric',)
  id_project: number;



}
