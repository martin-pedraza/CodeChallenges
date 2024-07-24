import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EditorialesService } from '../services/editoriales.service';
import { CreateEditorialDto } from '../dto/create-editorial.dto';
import { UpdateEditorialDto } from '../dto/update-editorial.dto';
import { Editorial } from '../../../database/models/editorial.model';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('editoriales')
@Controller('editoriales')
export class EditorialesController {
  constructor(private readonly editorialesService: EditorialesService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las editoriales' })
  @ApiResponse({ status: 200, description: 'Listar todas las editoriales.' })
  async findAll(): Promise<Editorial[]> {
    return this.editorialesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una editorial por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la editorial' })
  @ApiResponse({ status: 200, description: 'Editorial encontrada.' })
  @ApiResponse({ status: 404, description: 'Editorial no encontrada.' })
  async findById(@Param('id') id: number): Promise<Editorial> {
    return this.editorialesService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva editorial' })
  @ApiResponse({ status: 201, description: 'Editorial creada.' })
  @ApiResponse({ status: 400, description: 'Datos no validos para un editorial.' })
  async create(@Body() createEditorialDto: CreateEditorialDto): Promise<Editorial> {
    return this.editorialesService.create(createEditorialDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una editorial existente' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la editorial' })
  @ApiResponse({ status: 200, description: 'Editorial actualizada.' })
  @ApiResponse({ status: 400, description: 'Datos no validos para un editorial.' })
  @ApiResponse({ status: 404, description: 'Editorial no encontrada.' })
  async update(
    @Param('id') id: number,
    @Body() updateEditorialDto: UpdateEditorialDto,
  ): Promise<Editorial> {
    return this.editorialesService.update(id, updateEditorialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una editorial existente' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la editorial' })
  @ApiResponse({ status: 204, description: 'Editorial eliminada.' })
  @ApiResponse({ status: 404, description: 'Editorial no encontrada.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.editorialesService.delete(id);
  }
}
