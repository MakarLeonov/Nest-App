import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: 'Почтовый адрес'})
    readonly email: string;
    
    @ApiProperty({example: 'Qwerty123', description: 'Пароль'})
    readonly password: string;
}