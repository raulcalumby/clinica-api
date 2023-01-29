import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShedulingModule } from './sheduling/sheduling.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import { GatewayModule } from './gateway/gateway.module';



@Module({
  imports: [
    AuthModule,
    UsersModule,
    NotificationsModule,
    GatewayModule,
    MongooseModule.forRoot('mongodb+srv://mongo:fHbMj2VpCbe01Yns@clinica.w6nitka.mongodb.net/test'), ShedulingModule, AuthModule, NotificationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
