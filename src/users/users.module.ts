import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersService } from './users.service';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role]),
    RolesModule
  ]
})
export class UsersModule {}
