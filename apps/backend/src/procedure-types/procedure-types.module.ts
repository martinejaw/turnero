import { Module } from '@nestjs/common';
import { ProcedureTypesService } from './procedure-types.service';
import { ProcedureTypesController } from './procedure-types.controller';

@Module({
  controllers: [ProcedureTypesController],
  providers: [ProcedureTypesService],
})
export class ProcedureTypesModule {}
