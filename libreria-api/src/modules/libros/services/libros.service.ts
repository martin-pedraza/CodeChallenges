import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Autor } from '../../../database/models/autor.model';
import { Editorial } from '../../../database/models/editorial.model';
import { Libro } from '../../../database/models/libro.model';
import { CreateLibroDto } from '../dto/create-libro.dto';
import { UpdateLibroDto } from '../dto/update-libro.dto';
const moment = require('moment');
import { FindOptions } from 'sequelize';

@Injectable()
export class LibrosService {
    constructor(
        @InjectModel(Editorial)
        private readonly editorialModel: typeof Editorial,
        @InjectModel(Autor)
        private readonly autorModel: typeof Autor,
        @InjectModel(Libro)
        private libroModel: typeof Libro,
      ) {}

      async findAll(categoriaLiteraria?: string, page: number = 1, limit: number = 10): Promise<{ rows: Libro[], count: number }> {
        const options: FindOptions = {
            where: {},
            limit: limit,
            offset: (page - 1) * limit,
            order: [['titulo', 'ASC']],
        };

        if (categoriaLiteraria) {
            options.where['categoriaLiteraria'] = categoriaLiteraria;
        }

        const { count, rows } = await this.libroModel.findAndCountAll(options);
        return { rows, count };
    }

    async findById(id: number): Promise<Libro>{
        const libro = await this.libroModel.findByPk(id, {
            include: [
                { model: Editorial },
                { model: Autor, through: { attributes: [] } }
            ],
        });
        if (!libro) {
            throw new NotFoundException(`Libro con ID ${id} no encontrado`); 
        }
        return libro;
    }

    async delete(id: number): Promise<void>{
        const libro = await this.findById(id);
        return libro.destroy();
    }

    private parseDate(dateStr: string): Date {
        const formats = ['DD/MM/YYYY', 'DD/MM/YY'];
        for (const format of formats) {
          const date = moment(dateStr, format, true);
          if (date.isValid()) {
            return date.toDate();
          }
        }
        throw new BadRequestException('Fecha de lanzamiento no es válida. Debe ser DD/MM/YYYY o DD/MM/YY.');
    }

    async create(createLibroDto: Partial<CreateLibroDto>): Promise<Libro> {
        const { titulo, categoriaLiteraria, precio, fechaLanzamiento, descripcion, autores, editorialId } = createLibroDto;

        const fechaLanzamientoISO = this.parseDate(fechaLanzamiento);
        await this.validateEditorial(editorialId);

        const libro = await this.libroModel.create({
            titulo,
            categoriaLiteraria,
            precio,
            fechaLanzamiento: fechaLanzamientoISO,
            descripcion,
            editorialId,
        });

        if (autores?.length) await this.associateAutores(libro, autores);

        return libro;
    }
    
    async update(id: number, updateLibroDto: UpdateLibroDto): Promise<Libro> {
        const libro = await this.findById(id);
        const { titulo, categoriaLiteraria, precio, fechaLanzamiento, descripcion, autores, editorialId } = updateLibroDto;

        if (editorialId !== undefined) {
            await this.validateEditorial(editorialId);
            libro.editorialId = editorialId;
        }

        if (titulo !== undefined) libro.titulo = titulo;
        if (categoriaLiteraria !== undefined) libro.categoriaLiteraria = categoriaLiteraria;
        if (precio !== undefined) libro.precio = precio;
        if (fechaLanzamiento !== undefined) libro.fechaLanzamiento = this.parseDate(fechaLanzamiento);
        if (descripcion !== undefined) libro.descripcion = descripcion;
    
        await libro.save();

        if (autores !== undefined) await this.associateAutores(libro, autores);

        return libro;
    }

    private async validateEditorial(editorialId: number): Promise<void> {
        const editorial = await this.editorialModel.findByPk(editorialId);
        if (!editorial) {
            throw new NotFoundException(`Editorial con ID ${editorialId} no encontrada`);
        }
    }

    private async associateAutores(libro: Libro, autores: number[]): Promise<void> {
        const autoresAsociados = await this.autorModel.findAll({
          where: { id: autores },
        });
        if (autoresAsociados.length !== autores.length) {
            throw new BadRequestException('Algunos autores no existen. Libro creado/actualizado sin autores asociados.');
        }
        await libro.$set('autores', autoresAsociados);
    }
}
