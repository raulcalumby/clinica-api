import {  IsDefined, IsIn, IsNotEmpty, IsString, ValidateIf } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    @IsIn(['doctor', 'patient'], {message: "Só podemos cadastrar usuarios do tipo 'doctor' ou 'patient'"})
    type: string;
}
