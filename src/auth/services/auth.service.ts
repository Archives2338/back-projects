/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from '../dto/login-user.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
@Injectable()
export class AuthService {

constructor(
  @InjectRepository(User)
  private readonly userRepository: Repository<User>,
  private readonly jwtService: JwtService,
) {}

async create(user:CreateUserDto){
  // console.log("user",user)
  const {mail} = user;
  const userExist = await this.userRepository.findOne({

    where: {mail},

  });
  if (userExist) {
    throw new BadRequestException('Email already exists');
  }else{

    try {
      const {password, ...userDate} = user;
      const newUser = this.userRepository.create({
        ...userDate,
        password: bcrypt.hashSync(password, 10),

      });
      await this.userRepository.save(newUser);
      return {
        success: true,
        message: 'User created successfully',
      };

    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error creating user');
    }


  }

}

async login (userLogin : LoginUserDto){
  try {
    const {mail, password} = userLogin;
    const user = await this.userRepository.findOne({where:{mail} , select: {mail:true , password:true, name:true, id_type_user:true}})
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException('Invalid credentials');
    }
    delete user.password;
    // console.log("llegue aca")
    return {...user,
      token: this.getJwtToken({id: user.id_user, mail: user.mail , name_user: user.name})


    }


  } catch (error) {
    console.log(error)
    throw new BadRequestException('Error login user');
  }
}

async verifyToken(object:any){
  try {
    console.log("token",object)
    this.jwtService.verify(object.token)
    return {valid:true}
  } catch (error) {
    return {valid:false}
  }
}

private getJwtToken(payload: JwtPayload){
  const token = this.jwtService.sign(payload);
  return token;

}


}
