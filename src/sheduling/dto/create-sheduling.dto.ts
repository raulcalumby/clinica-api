import { IsDateString, IsDefined, IsNotEmpty, isString, IsString } from "class-validator"

export class CreateShedulingDto {
    @IsString()
    date: string
    @IsString()
    @IsDefined()
    patient: string
    @IsString()
    doctor: string
}
