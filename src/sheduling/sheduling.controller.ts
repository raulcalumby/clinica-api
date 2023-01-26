import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShedulingService } from './sheduling.service';
import { CreateShedulingDto } from './dto/create-sheduling.dto';
import { UpdateShedulingDto } from './dto/update-sheduling.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('sheduling')
@UseGuards(AuthGuard('jwt'))
export class ShedulingController {
  constructor(private readonly shedulingService: ShedulingService) {}

  @Post()
  create(@Body() createShedulingDto: CreateShedulingDto) {
    return this.shedulingService.create(createShedulingDto);
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
  findByPatientId(@Param('id') id: string)
  {
    return this.shedulingService.findByPatientId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShedulingDto: UpdateShedulingDto) {
    
    return this.shedulingService.update(id, updateShedulingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shedulingService.remove(id);
  }
}
