import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../../../database/models/libro.model';
import { CreateLibroDto } from '../dto/create-libro.dto';
import { UpdateLibroDto } from '../dto/update-libro.dto';
import { FindAllLibrosDto } from '../dto/findall-libro.dto';

@ApiTags('libros')
@Controller('libros')
export class LibrosController {
    constructor(private readonly librosService: LibrosService) {}

    @Get()
    @ApiOperation({ summary: 'Obtener todos los libros' })
    @ApiResponse({ status: 200, description: 'Listar todos los libros.' })
    async findAll(@Query() query: FindAllLibrosDto): Promise<{ rows: Libro[], count: number }> {
      const { categoriaLiteraria, page = 1, limit = 10 } = query;
      return this.librosService.findAll(categoriaLiteraria, page, limit);
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un libro por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del libro' })
    @ApiResponse({ status: 200, description: 'Libro encontrado.' })
    @ApiResponse({ status: 404, description: 'Libro no encontrado.' })
    async findById(@Param('id') id: number): Promise<Libro> {
      return this.librosService.findById(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo libro' })
    @ApiResponse({ status: 201, description: 'Libro creado.' })
    @ApiResponse({ status: 400, description: 'Datos no validos para un libro.' })
    async create(@Body() createLibroDto: CreateLibroDto): Promise<Libro> {
      return this.librosService.create(createLibroDto);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un libro existente' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del libro' })
    @ApiResponse({ status: 200, description: 'Libro actualizado.' })
    @ApiResponse({ status: 400, description: 'Datos no validos para un libro.' })
    @ApiResponse({ status: 404, description: 'Libro no encontrado.' })
    async update(
      @Param('id') id: number,
      @Body() updateLibroDto: UpdateLibroDto,
    ): Promise<Libro> {
      return this.librosService.update(id, updateLibroDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un libro existente' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del libro' })
    @ApiResponse({ status: 204, description: 'Libro eliminado.' })
    @ApiResponse({ status: 404, description: 'Libro no encontrado.' })
    async delete(@Param('id') id: number): Promise<void> {
      return this.librosService.delete(id);
    }
}
