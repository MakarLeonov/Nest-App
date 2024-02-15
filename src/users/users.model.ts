import { BelongsToMany, Model, Table, Column, DataType } from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "../roles/user-roles.model";
import { Role } from "src/roles/roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Id пользователя'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'user@email.com', description: 'Почтовый адрес'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: 'Qwerty123', description: 'Пароль'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'true', description: 'Статус бана'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    bunned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина бана'})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}