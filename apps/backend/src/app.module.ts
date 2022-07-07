import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module';
import { UsersModule } from './users/users.module';

const globalModules = [PrismaModule];

const resourceModules = [UsersModule];

@Module({
  imports: [...globalModules, ...resourceModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
