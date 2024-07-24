import { Module } from '@nestjs/common';
import { EditorialesController } from './controllers/editoriales.controller';
import { EditorialesService } from './services/editoriales.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Editorial } from 'src/database/models/editorial.model';

@Module({
  imports: [SequelizeModule.forFeature([Editorial])],
  controllers: [EditorialesController],
  providers: [EditorialesService]
})
export class EditorialesModule {}
