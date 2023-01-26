import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShedulingDto } from 'src/sheduling/dto/create-sheduling.dto';
import { UpdateShedulingDto } from 'src/sheduling/dto/update-sheduling.dto';
import { Sheduling, ShedulingDocument } from 'src/sheduling/entities/sheduling.entity';



@Injectable()
export class ShedulingService {

  constructor(@InjectModel(Sheduling.name) private shedulingModel: Model<ShedulingDocument>) {}
  
  create(createShedulingDto: CreateShedulingDto) {
    const user = new this.shedulingModel(createShedulingDto)
    return user.save();
  }
  findAll() {
    return this.shedulingModel.find();
  }

  findOne(id: string) {
    return this.shedulingModel.findById(id)
  }

  async findByPatientId(patient: string) {
    return this.shedulingModel.find({ patient });
  }

  async update(id: string, UpdateShedulingDto: UpdateShedulingDto) {
    return await this.shedulingModel.findByIdAndUpdate(id, UpdateShedulingDto, {new: true});
}


  remove(id: string) {
    return this.shedulingModel.deleteOne({_id: id}).exec();
  }
}
