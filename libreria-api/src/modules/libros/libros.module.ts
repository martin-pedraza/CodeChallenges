import { Module } from '@nestjs/common';
import { LibrosService } from './services/libros.service';
import { LibrosController } from './controllers/libros.controller';
import { Libro } from 'src/database/models/libro.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Editorial } from 'src/database/models/editorial.model';
import { Autor } from 'src/database/models/autor.model';

@Module({
  imports: [SequelizeModule.forFeature([Libro, Editorial, Autor])],
  controllers: [LibrosController],
  providers: [LibrosService]
})
export class LibrosModule {}
