import { IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  message: string;
  @IsNotEmpty()
  userId: string;
  @IsNotEmpty()
  readAt: string;

  @IsNotEmpty()
  createdAt: string;
}
