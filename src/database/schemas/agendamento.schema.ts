import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Client } from './cliente.schema';

export type AgendamentoDocument = HydratedDocument<Agendamento>;

@Schema({ timestamps: true }) // Adiciona campos createAt e updateAt
export class Agendamento {
  // 1. Relacionamento com o cliente
  // Tipo: ObjectId, Ref,: Client (nome da classe Client)
  // Para saber qual Cliente fez o agendadamento sem duplicar dados
  @Prop({ type: Types.ObjectId, ref: Client.name, required: true })
  clienteId: Types.ObjectId;

  // Serviço agendado
  @Prop({ required: true })
  servico: string;

  // Data e hora do agendamento
  @Prop({ required: true })
  dataAgendamento: Date;

  // Status do pagamento (PENDING, PAID, CANCELED)
  @Prop({ default: 'PENDING' })
  statusPagamento: string;

  // ID da transação nom Mercado Pago
  @Prop({ required: false })
  mpExternalId: string;
}

export const AgendamentoSchema = SchemaFactory.createForClass(Agendamento);
