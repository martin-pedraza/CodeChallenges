import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Autor } from '../../../database/models/autor.model';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { UpdateAutorDto } from '../dto/update-autor.dto';
import { Libro } from '../../../database/models/libro.model';

@Injectable()
export class AutoresService {
    constructor(
        @InjectModel(Autor)
        private readonly autorModel: typeof Autor,
        @InjectModel(Libro)
        private libroModel: typeof Libro,
      ) {}

    async findAll(): Promise<Autor[]>{
        return this.autorModel.findAll();
    }

    async findById(id: number): Promise<Autor>{
        const autor = await this.autorModel.findByPk(id);
        if (!autor) {
            throw new NotFoundException(`Autor con ID ${id} no encontrado`); 
        }
        return autor;
    }

    async delete(id: number): Promise<void>{
        const autor = await this.findById(id);
        return autor.destroy();
    }

    async create(createAutorDto: Partial<CreateAutorDto>): Promise<Autor> {
        const { nombre, apellido, dni, nacionalidad, libros } = createAutorDto;

        const autor = await this.autorModel.create({
            nombre,
            apellido,
            dni,
            nacionalidad,
        });

        if (libros && libros.length > 0) await this.associateLibros(autor, libros);

        return autor;
    }
    
    async update(id: number, updateAutorDto: UpdateAutorDto): Promise<Autor> {
        const autor = await this.findById(id);
        const { nombre, apellido, dni, nacionalidad, libros } = updateAutorDto;

        if (nombre !== undefined) autor.nombre = nombre;
        if (apellido !== undefined) autor.apellido = apellido;
        if (dni !== undefined) autor.dni = dni;
        if (nacionalidad !== undefined) autor.nacionalidad = nacionalidad;
    
        await autor.save();

        if (libros !== undefined) await this.associateLibros(autor, libros);

        return autor;
    }

    async associateLibros(autor: Autor, libros: number[]): Promise<void> {
        const librosAsociados = await this.libroModel.findAll({
          where: { id: libros },
        });
        await autor.$set('libros', librosAsociados);
      }
}
