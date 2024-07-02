import { NestFactory } from '@nestjs/core';
import { EventModule } from './event/event.module';

async function bootstrap() {
  const app = await NestFactory.create(EventModule);
  app.enableCors();           
  await app.listen(8000);
}
bootstrap();
    