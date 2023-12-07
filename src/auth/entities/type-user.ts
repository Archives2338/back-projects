/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';

@Entity({name: 'type_user'})
export class TypeUser {
@PrimaryGeneratedColumn('increment')
id_type : number

@Column('text')
name : string
}
