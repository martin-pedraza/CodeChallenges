import { Module } from '@nestjs/common';

import { LibrosModule } from './modules/libros/libros.module';
import { AutoresModule } from './modules/autores/autores.module';
import { EditorialesModule } from './modules/editoriales/editoriales.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LibrosModule, AutoresModule, EditorialesModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
