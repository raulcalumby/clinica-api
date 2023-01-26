import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShedulingDocument = Sheduling & Document ;

@Schema()
export class Sheduling {
  @Prop()
  date: string;

  @Prop()
  patient: string;
  
  @Prop()
  doctor: string;
}

export const ShedulingSchema = SchemaFactory.createForClass(Sheduling);