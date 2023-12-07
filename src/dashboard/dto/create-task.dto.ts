/* eslint-disable prettier/prettier */
import {

  IsNumber,
  IsString,

} from 'class-validator';

export class CreateTaskDto {

  @IsString()
  title: string;



  @IsString()
  description: string;


  @IsNumber()
  state: number;

  @IsNumber()
  id_project: number;
}
