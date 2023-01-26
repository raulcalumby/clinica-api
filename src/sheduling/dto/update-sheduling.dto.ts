import { PartialType } from '@nestjs/mapped-types';
import { CreateShedulingDto } from './create-sheduling.dto';

export class UpdateShedulingDto extends PartialType(CreateShedulingDto) {}
