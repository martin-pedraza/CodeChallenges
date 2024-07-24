import { Test, TestingModule } from '@nestjs/testing';
import { AutoresService } from './autores.service';
import { Autor } from '../../../database/models/autor.model';
import { Libro } from '../../../database/models/libro.model';
import { NotFoundException } from '@nestjs/common';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { UpdateAutorDto } from '../dto/update-autor.dto';
import { getModelToken } from '@nestjs/sequelize';

describe('AutoresService', () => {
  let service: AutoresService;
  let autorModel: typeof Autor;
  let libroModel: typeof Libro;

  const mockAutor: Partial<Autor> = {
    id: 1,
    nombre: 'Nombre',
    apellido: 'Apellido',
    dni: '33555777',
    nacionalidad: 'Argentina',
    libros: [],
    save: jest.fn(),
    destroy: jest.fn().mockResolvedValue(undefined),
    $set: jest.fn().mockResolvedValue(undefined),
  };

  const mockCreateAutorDto: CreateAutorDto = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    dni: '33555777',
    nacionalidad: 'Argentina',
    libros: [1, 2],
  };

  const mockUpdateAutorDto: UpdateAutorDto = {
    nombre: 'Nombre Actualizado',
  };

  const mockAutorModel = {
    findAll: jest.fn(),
    findByPk: jest.fn(),
    create: jest.fn(),
    destroy: jest.fn(),
    save: jest.fn(),
    $set: jest.fn(),
  };
  
  const mockLibroModel = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AutoresService,
        { provide: getModelToken(Autor), useValue: mockAutorModel },
        { provide: getModelToken(Libro), useValue: mockLibroModel },
      ],
    }).compile();

    service = module.get<AutoresService>(AutoresService);
    autorModel = module.get<typeof Autor>(getModelToken(Autor));
    libroModel = module.get<typeof Libro>(getModelToken(Libro));
  });

  it('debe ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('debe devolver un listado de autores', async () => {
      jest.spyOn(autorModel, 'findAll').mockResolvedValue([mockAutor] as any);
      expect(await service.findAll()).toEqual([mockAutor]);
    });
  });

  describe('findById', () => {
    it('debe devolver solo un autor por id', async () => {
      jest.spyOn(autorModel, 'findByPk').mockResolvedValue(mockAutor as any);
      expect(await service.findById(1)).toEqual(mockAutor);
    });

    it('debe arrojar NotFoundException si el autor no fue encontrado', async () => {
      jest.spyOn(autorModel, 'findByPk').mockResolvedValue(null);
      await expect(service.findById(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('debe crear y devolver un nuevo autor', async () => {
      jest.spyOn(autorModel, 'create').mockResolvedValue(mockAutor as any);
      jest.spyOn(service, 'associateLibros').mockResolvedValue(undefined);
      expect(await service.create(mockCreateAutorDto)).toEqual(mockAutor);
    });
  });

  describe('update', () => {
    it('should update and return an autor', async () => {
      jest.spyOn(service, 'findById').mockResolvedValue(mockAutor as any);
      jest.spyOn(mockAutor, 'save').mockResolvedValue(mockAutor as any);
      jest.spyOn(service, 'associateLibros').mockResolvedValue(undefined);
      expect(await service.update(1, mockUpdateAutorDto)).toEqual(mockAutor);
    });
  });

  describe('delete', () => {
    it('debe borrar un autor', async () => {
      jest.spyOn(service, 'findById').mockResolvedValue(mockAutor as any);
      jest.spyOn(mockAutor, 'destroy').mockResolvedValue(undefined);
      await expect(service.delete(1)).resolves.toBeUndefined();
    });
  });
});
