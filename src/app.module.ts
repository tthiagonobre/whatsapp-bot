import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [
    // 1. ConfigModule para carregar o .env e torna-lo global
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // 2. MongooseModule para conectar ao DB usando o MONGO_URI do .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        uri: ConfigService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    AgendamentoModule,
    WhatsappModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
