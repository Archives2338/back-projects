/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }
  ));
  const config = new DocumentBuilder()
  .setTitle('API - NestJS')
  .setDescription('Documentacion para las APIS de la aplicacion')
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000);
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(()=>app.close());
  }
}
bootstrap();
