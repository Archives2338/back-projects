/* eslint-disable prettier/prettier */
import {

  IsString,

} from 'class-validator';

export class CreateProjectDto {

  @IsString()

  name_project: string;



}
