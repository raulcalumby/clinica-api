import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShedulingModule } from './sheduling/sheduling.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
const dotenv = require('dotenv');
dotenv.config();
@Module({
  imports: [
    AuthModule,
    UsersModule,
    NotificationsModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ShedulingModule,
    AuthModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
