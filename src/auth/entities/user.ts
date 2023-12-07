/* eslint-disable prettier/prettier */
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id_user: number;

  @Column('text')
  name: string;

  @Column('text')
  mail: string;
  @Column('numeric', { default: 2 })
  id_type_user: number;
  @Column('text', { select: false })
  password: string;


  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.mail = this.mail.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
