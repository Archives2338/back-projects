/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';



@ApiTags('API AUTH')
@ApiBearerAuth('JWT-auth')
@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {}

@Post('register')
@ApiResponse({ status: 201, description: 'Consumidor creado correctamente.'})
create(@Body() user:any){
// console.log("user",user)
return this.authService.create(user);
}

@Post('login')
@ApiResponse({ status: 201, description: '{token: string , email: string, id_type_user: number, name: string}'})
login(@Body() userLogin:LoginUserDto){
return this.authService.login(userLogin);
}

@Post('verify-token')
@ApiResponse({ status: 200, description: 'Token is valid'})
verifyToken(@Body() token:any){
return this.authService.verifyToken(token);
}
}
