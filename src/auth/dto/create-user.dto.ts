/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;



  @IsEmail()
  mail: string;

  @MinLength(1)
  id_type_user: number;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
}
