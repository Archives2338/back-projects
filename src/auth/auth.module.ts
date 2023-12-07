/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUser } from './entities/type-user';
import { JwtStrategy } from './strategies/jwt.strategy';
import { User } from './entities/user';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      imports:[],
      inject:[],
      useFactory:()=>{
        return{
          secret:process.env.JWT_SECRET,
          signOptions:{
            expiresIn:'1d'
          }
        }
      }
      }),
    TypeOrmModule.forFeature([User, TypeUser]),
  ],

  exports: [TypeOrmModule, JwtStrategy,PassportModule, JwtModule],



})
export class AuthModule {}
