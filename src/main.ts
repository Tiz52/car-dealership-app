import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // true = only validate fields that are defined in the DTO
      forbidNonWhitelisted: true, // true = forbid fields that are not defined in the DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
