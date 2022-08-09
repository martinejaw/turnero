import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './core/security/auth/auth.module';
import { SecurityModule } from './core/security/security.module';
import { UsersModule } from './users/users.module';
import { BusinessModule } from './business/business.module';
import { BranchesModule } from './branches/branches.module';

const globalModules = [PrismaModule, SecurityModule];

const resourceModules = [UsersModule, BusinessModule, BranchesModule];

@Module({
  imports: [...globalModules, ...resourceModules, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
