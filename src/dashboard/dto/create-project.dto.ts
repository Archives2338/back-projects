/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {

  IsString,

} from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsString()

  name_project: string;



}
