import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './core/security/auth/auth.module';
import { SecurityModule } from './core/security/security.module';
import { UsersModule } from './users/users.module';
import { BusinessModule } from './business/business.module';
import { BranchesModule } from './branches/branches.module';
import { AppointmentGroupsModule } from './appointment-groups/appointment-groups.module';
import { ProcedureTypesModule } from './procedure-types/procedure-types.module';

const globalModules = [PrismaModule, SecurityModule];

const resourceModules = [
  UsersModule,
  BusinessModule,
  BranchesModule,
  AppointmentGroupsModule,
  ProcedureTypesModule,
];

@Module({
  imports: [...globalModules, ...resourceModules, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
