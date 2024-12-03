import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const globalprefix = 'api';
  app.setGlobalPrefix(globalprefix);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    Logger.log('listening at http://localhost:' + PORT + '/' + globalprefix);
  });
}
bootstrap();
