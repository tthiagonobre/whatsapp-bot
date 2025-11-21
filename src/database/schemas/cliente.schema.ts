import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  // Número de telefone do usuário (ID primário)
  @Prop({ required: true, unique: true })
  whatsappId: string;

  // Nome capturado durante o primeiro contato
  @Prop({ required: true })
  nome: string;

  // Estado da conversa (Ex: 'AWAINTING_SERVICE_SELECTION', 'AWAITING PAYMENT')
  @Prop({ default: 'INITIAL' })
  conversationState: string;

  // Dados temporários (Ex: guardar serviço selecionado antes da confirmação)
  @Prop({ type: Object, default: {} })
  tempData: Record<string, any>;

  @Prop({ default: false })
  isAdmin: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
