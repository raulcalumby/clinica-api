import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator";
import { EmailExists } from "../validation/email-validate";


export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    @EmailExists({message: 'Já existe um usuário com este email'})
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
