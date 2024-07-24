import { Test, TestingModule } from '@nestjs/testing';
import { AutoresController } from './autores.controller';
import { AutoresService } from '../services/autores.service';
import { UpdateAutorDto } from '../dto/update-autor.dto';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { Autor } from '../../../database/models/autor.model';

describe('AutoresController', () => {
  let controller: AutoresController;
  let service: AutoresService;

  const mockAutor: Partial<Autor> = {
    id: 1,
    nombre: 'Nombre',
    apellido: "Apellido",
    dni: "33555777",
    nacionalidad: "Argentina",
    libros: [],
  };

  const mockCreateAutorDto: CreateAutorDto = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    dni: '33555777',
    nacionalidad: 'Argentina',
    libros: [],
  };

  const mockUpdateAutorDto: UpdateAutorDto = {
    nombre: 'Nombre Actualizado',
  };

  const mockAutoresService = {
    findAll: jest.fn().mockResolvedValue([mockAutor]),
    findById: jest.fn().mockResolvedValue(mockAutor),
    create: jest.fn().mockResolvedValue(mockAutor),
    update: jest.fn().mockResolvedValue(mockAutor),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoresController],
      providers: [
        {
          provide: AutoresService,
          useValue: mockAutoresService,
        },
      ],
    }).compile();

    controller = module.get<AutoresController>(AutoresController);
    service = module.get<AutoresService>(AutoresService);
  });

  it('debe ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('debe devolver un listado de autores', async () => {
      expect(await controller.findAll()).toEqual([mockAutor]);
    });
  });

  describe('findById', () => {
    it('debe devolver solo un autor por id', async () => {
      expect(await controller.findById(1)).toEqual(mockAutor);
    });
  });

  describe('create', () => {
    it('debe crear y devolver un autor', async () => {
      expect(await controller.create(mockCreateAutorDto)).toEqual(mockAutor);
    });
  });

  describe('update', () => {
    it('debe actualizar y devolver un autor', async () => {
      expect(await controller.update(1, mockUpdateAutorDto)).toEqual(mockAutor);
    });
  });

  describe('delete', () => {
    it('debe borrar un autor', async () => {
      await expect(controller.delete(1)).resolves.toBeUndefined();
    });
  });
});
