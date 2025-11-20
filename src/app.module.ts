import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [WhatsappModule, AgendamentoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
