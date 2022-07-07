import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // API Docs
  const config = new DocumentBuilder()
    .setTitle('Turnero Application API')
    .setDescription('The Turnero API description')
    .setVersion('1.0')
    .addTag('Turnero')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
