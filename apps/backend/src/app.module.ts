import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module';
import { SecurityModule } from './core/security/security.module';
import { UsersModule } from './users/users.module';

const globalModules = [PrismaModule, SecurityModule];

const resourceModules = [UsersModule];

@Module({
  imports: [...globalModules, ...resourceModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
