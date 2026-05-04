import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://portfolio-web-coral-seven.vercel.app',
      'https://portfolio-woad-eta-98.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(process.env.PORT || 3000);
  console.log('Backend running');
}
bootstrap();