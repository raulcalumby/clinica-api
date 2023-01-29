import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { ChangeStream } from 'mongoose-change-stream';

@WebSocketGateway()
export class MyGateway {
    @WebSocketServer()
    server;
    notificStream;
    @SubscribeMessage('notificConnect')
    async notificConnect(@MessageBody() userId: any) {
        this.notificStream = new ChangeStream(Notification.collection, {
            fullDocument: 'updateLookup'
        });
        this.notificStream.on('change', (change) => {
            if(change.operationType === 'insert' && change.fullDocument.userId == userId) {
                this.server.emit('newNotification', change.fullDocument);
            }
        });
    }
}
