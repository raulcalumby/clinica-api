import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShedulingService } from './sheduling.service';
import { CreateShedulingDto } from './dto/create-sheduling.dto';
import { UpdateShedulingDto } from './dto/update-sheduling.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotificationGateway } from 'src/notifications/notifications.gateway';
import { retry } from 'rxjs';

@Controller('sheduling')
@UseGuards(AuthGuard('jwt'))
export class ShedulingController {
  constructor(
    private readonly shedulingService: ShedulingService,
    private readonly notificationGateway: NotificationGateway,
  ) {}

  @Post()
  async create(@Body() createShedulingDto: CreateShedulingDto) {
    const sheduling = await this.shedulingService.create(createShedulingDto);
    if (sheduling) {
      this.notificationGateway.create({
        message: 'Rual',
        userId: '01',
        readAt: '123dasdsa4',
        createdAt: 'patient',
      });
    }
    return sheduling;
  }

  @Get()
  findAll() {
    return this.shedulingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shedulingService.findOne(id);
  }

  @Get('/patient/:id')
  findByPatientId(@Param('id') id: string) {
    return this.shedulingService.findByPatientId(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShedulingDto: UpdateShedulingDto,
  ) {
    return this.shedulingService.update(id, updateShedulingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shedulingService.remove(id);
  }
}
