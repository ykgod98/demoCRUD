import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // 원하는 파라미터만 들어왔을 떄 제어

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // 모두를 허용하기 때문에 허용
  // whitelist 이런것들을 적어서 하기


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  await app.listen(4000);
}
bootstrap();
