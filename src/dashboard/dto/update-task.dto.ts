/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {

  IsNumber,


} from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty()
  @IsNumber()
  id_task: number;
  @ApiProperty()
  @IsNumber()
  state: number;

}
