/* eslint-disable prettier/prettier */
import {

  IsNumber,


} from 'class-validator';

export class UpdateTaskDto {

  @IsNumber()
  id_task: number;

  @IsNumber()
  state: number;

}
