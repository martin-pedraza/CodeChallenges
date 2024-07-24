import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Editorial } from '../../../database/models/editorial.model';
import { CreateEditorialDto } from '../dto/create-editorial.dto';
import { UpdateEditorialDto } from '../dto/update-editorial.dto';

@Injectable()
export class EditorialesService {
    constructor(
        @InjectModel(Editorial)
        private readonly editorialModel: typeof Editorial,
      ) {}

    async findAll(): Promise<Editorial[]>{
        return this.editorialModel.findAll();
    }

    async findById(id: number): Promise<Editorial>{
        const editorial = await this.editorialModel.findByPk(id);
        if (!editorial) {
            throw new NotFoundException(`Editorial con ID ${id} no encontrado`); 
        }
        return editorial;
    }

    async delete(id: number): Promise<void>{
        const editorial = await this.findById(id);
        return editorial.destroy();
    }

    async create(createEditorialDto: Partial<CreateEditorialDto>): Promise<Editorial> {
        return this.editorialModel.create(createEditorialDto);
    }
    
    async update(id: number, updateEditorialDto: UpdateEditorialDto): Promise<Editorial> {
        const editorial = await this.findById(id);
        return editorial.update(updateEditorialDto);
    }
}
