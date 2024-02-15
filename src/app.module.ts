import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.HOST,
            port: +process.env.DB_PORT,
            username: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Role, UserRoles],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
    ],
})
export class AppModule {}