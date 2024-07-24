import { Module } from '@nestjs/common';
import { AutoresService } from './services/autores.service';
import { AutoresController } from './controllers/autores.controller';
import { Autor } from 'src/database/models/autor.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Libro } from 'src/database/models/libro.model';

@Module({
  imports: [SequelizeModule.forFeature([Autor, Libro])],
  providers: [AutoresService],
  controllers: [AutoresController]
})
export class AutoresModule {}
