/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsString,

  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;


  @ApiProperty()
  @IsEmail()
  mail: string;

  @ApiProperty()
  @MinLength(1)
  id_type_user: number;


  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
