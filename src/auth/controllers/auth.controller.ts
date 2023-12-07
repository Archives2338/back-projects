/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';

@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {}

@Post('register')

create(@Body() user:any){
// console.log("user",user)
return this.authService.create(user);
}

@Post('login')
login(@Body() userLogin:LoginUserDto){
return this.authService.login(userLogin);
}

@Post('verify-token')
verifyToken(@Body() token:any){
return this.authService.verifyToken(token);
}
}
