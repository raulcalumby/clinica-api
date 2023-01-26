import { Module } from '@nestjs/common';
import { ShedulingService } from './sheduling.service';
import { ShedulingController } from './sheduling.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sheduling,ShedulingSchema } from './entities/sheduling.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Sheduling.name, schema: ShedulingSchema}])],
  controllers: [ShedulingController],
  providers: [ShedulingService]
})
export class ShedulingModule {}
