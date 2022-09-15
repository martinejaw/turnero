import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { EditBranchDto } from './dto/edit-branch.dto';

@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchesService.create(createBranchDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.branchesService.deleteBy(+id);
  }

  @Get()
  findAll() {
    return this.branchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branchesService.findOne(+id);
  }

  @Put()
  editOne(@Body() editBranchDto: EditBranchDto) {
    return this.branchesService.editOneBy(editBranchDto);
  }
}
