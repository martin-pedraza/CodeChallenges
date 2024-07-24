import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AutoresService } from '../services/autores.service';
import { Autor } from '../../../database/models/autor.model';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { UpdateAutorDto } from '../dto/update-autor.dto';

@ApiTags('autores')
@Controller('autores')
export class AutoresController {
    constructor(private readonly autoresService: AutoresService) {}

    @Get()
    @ApiOperation({ summary: 'Obtener todos los autores' })
    @ApiResponse({ status: 200, description: 'Listar todos los autores.' })
    async findAll(): Promise<Autor[]> {
      return this.autoresService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un autor por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del autor' })
    @ApiResponse({ status: 200, description: 'Autor encontrado.' })
    @ApiResponse({ status: 404, description: 'Autor no encontrado.' })
    async findById(@Param('id') id: number): Promise<Autor> {
      return this.autoresService.findById(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo autor' })
    @ApiResponse({ status: 201, description: 'Autor creado.' })
    @ApiResponse({ status: 400, description: 'Datos no validos para un autor.' })
    async create(@Body() createAutorDto: CreateAutorDto): Promise<Autor> {
      return this.autoresService.create(createAutorDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un autor existente' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del autor' })
    @ApiResponse({ status: 200, description: 'Autor actualizado.' })
    @ApiResponse({ status: 400, description: 'Datos no validos para un autor.' })
    @ApiResponse({ status: 404, description: 'Autor no encontrado.' })
    async update(
      @Param('id') id: number,
      @Body() updateAutorDto: UpdateAutorDto,
    ): Promise<Autor> {
      return this.autoresService.update(id, updateAutorDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un autor existente' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del autor' })
    @ApiResponse({ status: 204, description: 'Autor eliminado.' })
    @ApiResponse({ status: 404, description: 'Autor no encontrado.' })
    async delete(@Param('id') id: number): Promise<void> {
      return this.autoresService.delete(id);
    }
}
