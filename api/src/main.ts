import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed requests
    credentials: false, // No cookies/credentials necessary
  });
  await app.listen(8000);
  console.log(`Application is running on: ${await app.getUrl()}`); // delete before test
}
bootstrap();
