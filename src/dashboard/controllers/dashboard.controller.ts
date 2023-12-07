/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller,Get,Post, UseGuards,Param, Body  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from '../services/dashboard.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService:DashboardService ) {}

  @Get('projects')
  @UseGuards(AuthGuard('jwt'))
  getProjects() {
    return this.dashboardService.getProjects();
  }

  // GET PROJECT POR ID

  @Get('project/:id')
  @UseGuards(AuthGuard('jwt'))
  getProjectID( @Param('id') id: string) {

    return this.dashboardService.getProjectID( id);
  }



  // POST CREATE PROJECT
  @Post('create-project')
  @UseGuards(AuthGuard('jwt'))
  createProject(@Body() project:CreateProjectDto) {
    return this.dashboardService.createProject( project);
  }

  // POST CREATE TASK
  @Post('create-task')
  @UseGuards(AuthGuard('jwt'))
  createTask(@Body() task:CreateTaskDto) {
    return this.dashboardService.createTask( task);
  }



  // POST UPDATE STATE TASK
  @Post('update-state-task')
  @UseGuards(AuthGuard('jwt'))
  updateStateTask(@Body() task:UpdateTaskDto) {
    return this.dashboardService.updateTask( task);
  }


}
