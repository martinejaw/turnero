import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { EditSectionDto } from './dto/edit-section.dto';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionsService.create(createSectionDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.sectionsService.deleteBy(+id);
  }

  @Get()
  findAll() {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionsService.findOne(+id);
  }

  @Put()
  editOne(@Body() editSectionDto: EditSectionDto) {
    return this.sectionsService.editOneBy(editSectionDto);
  }
}
