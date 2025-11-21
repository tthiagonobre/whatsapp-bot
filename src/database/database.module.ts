import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './schemas/cliente.schema';
import { Agendamento, AgendamentoSchema } from './schemas/agendamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      // Registro do Cliente
      { name: Client.name, schema: ClientSchema },
      // Registro do Agendamento
      { name: Agendamento.name, schema: AgendamentoSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
