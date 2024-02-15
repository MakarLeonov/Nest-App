import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "../roles/user-roles.model";
import { User } from "src/users/users.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Id роли'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Роль пользователя'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}