/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "../entities/user";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(
    @InjectRepository (User)
    private readonly userRepository: Repository<User>

){
    super({
        secretOrKey:process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      });
}
async validate(payload: JwtPayload): Promise<User>{

    const {mail} = payload;
    const user = await this.userRepository.findOneBy({mail});
    if (!user) {
        throw new UnauthorizedException('token invalido');
      }


      return user;



}


}
