import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  constructor(private readonly notificationService: NotificationsService) {}

  afterInit(server: Server) {
    this.logger.log('init');
  }

  handleConnection(client: Socket) {
    this.logger.log(`connection:' ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`disconnect:' ${client.id}`);
  }

  @SubscribeMessage('createNotification')
  async create(@MessageBody() createNotificationDto: CreateNotificationDto) {
    const notification = await this.notificationService.create(
      createNotificationDto,
    );
    this.server.emit('notificationTest', notification);
    return notification;
  }
}
