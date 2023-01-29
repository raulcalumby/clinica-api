import { Injectable } from '@nestjs/common';
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator} from 'class-validator';
import { UsersService } from '../users.service';


@Injectable()
@ValidatorConstraint({async: true})
export class EmailExistsValidator implements ValidatorConstraintInterface {
    constructor(private userServices: UsersService) {}
   async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validateUser = await this.userServices.findByEmail(value);
        return !validateUser;
    }
}

//Decorator 
export const EmailExists =  (validationOptions: ValidationOptions) => {
    return (object: Object, prop: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: prop,
            options: validationOptions,
            constraints: [],
            validator: EmailExistsValidator
        });
    }
}