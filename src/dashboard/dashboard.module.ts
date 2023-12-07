/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DashboardController } from './controllers/dashboard.controller';
import { DashboardService } from './services/dashboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project';
import { Task } from './entities/task';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [PassportModule,ConfigModule,TypeOrmModule.forFeature([Project, Task])],
})
export class DashboardModule {}
