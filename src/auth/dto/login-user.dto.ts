/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto{


    @ApiProperty()
    @IsString()
    @MinLength(6)
    @MaxLength(50)

    password: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    mail: string;

}
