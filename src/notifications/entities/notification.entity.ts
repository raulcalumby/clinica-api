import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop()
  message: string;

  @Prop()
  userId: string;

  @Prop()
  readAt: string;

  @Prop()
  createdAt: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
