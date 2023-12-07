/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {createParamDecorator, ExecutionContext, InternalServerErrorException} from '@nestjs/common';
import { User } from '../entities/user';
export const getUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const req=ctx.switchToHttp().getRequest();
    // console.log("req",req)
    const user=req.user;
    if (!user) {
      throw new InternalServerErrorException('User not found');
    }
    console.log("user ",user)
    return user;
  }
);
