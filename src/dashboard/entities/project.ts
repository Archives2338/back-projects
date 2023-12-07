/* eslint-disable prettier/prettier */
import {

  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn('increment')
  id_project: number;

  @Column('text')
  name_project: string;



}
