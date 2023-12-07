/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {

  IsNumber,
  IsString,

} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  title: string;


  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  state: number;
  @ApiProperty()
  @IsNumber()
  id_project: number;
}
