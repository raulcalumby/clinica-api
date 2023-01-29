import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NotificationSchema } from "src/notifications/entities/notification.entity";
import { MyGateway } from "./gateway";

@Module({
    imports: [MyGateway, MongooseModule.forFeature([{name: Notification.name, schema: NotificationSchema}])]
})
export class GatewayModule {}   