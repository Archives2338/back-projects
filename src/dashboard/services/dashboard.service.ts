/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Project } from '../entities/project';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task';
import { CreateProjectDto } from '../dto/create-project.dto';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class DashboardService {

constructor( @InjectRepository(Project)
private readonly platformRepository: Repository<Project>,
@InjectRepository(Task) private readonly taskRepository: Repository<Task>,
) {}



async getProjects(){
  const projects = await this.platformRepository.find();


  return {
    "projects":projects,

  }
}

async getProjectID( id: string){
  // obtenemos las tareas del proyecto
  try {
    const id_project = Number(id);

  const task = await this.taskRepository.find({where: {id_project}});

  // en base a las tareas los separaremos en to do, doing y done
  const toDo = task.filter((task) => task.state === 1);
  const doing = task.filter((task) => task.state === 2);
  const done = task.filter((task) => task.state === 3);

  // obtenemos el proyecto
  const project = await this.platformRepository.findOne({
    where: {id_project},

  });


  // creamos un nuevo objeto con el proyecto y dentro las respectivas tareas

  const response :any = {};
  response.project = project;
  response.project.toDo = toDo;
  response.project.doing = doing;
  response.project.done = done;




  return response;

  } catch (error) {

    throw new BadRequestException('Error getting project');
  }


}
async createProject( project: CreateProjectDto){


    const {name_project} = project;
    const projectExist = await this.platformRepository.findOne({
      where: {name_project},

    });
    if (projectExist) {
      // console.log("entre",projectExist)
      throw new BadRequestException('Make sure that project doesnt exist');
    }else{

      const newProject = this.platformRepository.create({
        ...project,

      });
       const value = await this.platformRepository.save(newProject);
      // console.log("value",value)

      return {
        id_project: value.id_project,
        message: 'Project created successfully',
        success: true,
      };

    }





}


async createTask( task: CreateTaskDto){

  try {
    const {title} = task;
    const taskExist = await this.taskRepository.findOne({
      where: {title},

    });
    if (taskExist) {
      throw new BadRequestException('Make sure that task doesnt exist');
    }else{

      const newTask = this.taskRepository.create({
        ...task,

      });
      await this.taskRepository.save(newTask);
      return {
        message: 'Task created successfully',
      };

    }
  } catch (error) {
    // console.log(error);
    throw new BadRequestException('Error creating task');
  }


}


async updateTask(task:UpdateTaskDto){

  const {id_task} = task;
  const taskExist = await this.taskRepository.findOne({
    where: {id_task},

  });
  if (!taskExist) {
    throw new BadRequestException('Make sure that task exist');

  }else{

      try {
        await this.taskRepository.update(id_task, task);
        return {
          message: 'Task updated successfully',
        };
      } catch (error) {
        // console.log(error);
        throw new BadRequestException('Error updating task');
      }
  }



}

}
