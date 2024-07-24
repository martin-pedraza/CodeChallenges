import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Libro } from '../models/libro.model';
import { Autor } from '../models/autor.model';
import { Editorial } from '../models/editorial.model';
import { LibroAutor } from '../models/associations/libro-autor.model';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'Sqlserver2!',
  database: 'libreria_api_db',
  models: [Libro, Autor, Editorial, LibroAutor],
  autoLoadModels: true,
  synchronize: true,
};