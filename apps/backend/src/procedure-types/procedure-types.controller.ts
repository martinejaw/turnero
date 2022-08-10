import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProcedureTypesService } from './procedure-types.service';
import { CreateProcedureTypeDto } from './dto/create-procedure-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { ProcedureType } from './entities/procedure-type.entity';

@ApiTags('Procedure Types')
@Controller('procedure-types')
export class ProcedureTypesController {
  constructor(private readonly procedureTypesService: ProcedureTypesService) {}

  @Post()
  create(
    @Body() createProcedureTypeDto: CreateProcedureTypeDto,
  ): Promise<ProcedureType> {
    return this.procedureTypesService.create(createProcedureTypeDto);
  }

  @Get()
  findAll(): Promise<ProcedureType[]> {
    return this.procedureTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProcedureType> {
    return this.procedureTypesService.findOne(+id);
  }
}
