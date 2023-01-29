import { Module } from '@nestjs/common';
import { ShedulingService } from './sheduling.service';
import { ShedulingController } from './sheduling.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sheduling, ShedulingSchema } from './entities/sheduling.entity';
import { NotificationGateway } from 'src/notifications/notifications.gateway';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationSchema } from 'src/notifications/entities/notification.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sheduling.name, schema: ShedulingSchema },
    ]),
    MongooseModule.forFeature([
      { name: 'Notification', schema: NotificationSchema },
    ]),
  ],
  controllers: [ShedulingController],
  providers: [ShedulingService, NotificationsService, NotificationGateway],
})
export class ShedulingModule {}
