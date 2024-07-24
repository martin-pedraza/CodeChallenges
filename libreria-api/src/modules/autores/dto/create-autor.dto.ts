import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches, IsArray, ArrayNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateAutorDto {
  @ApiProperty({ description: 'Nombre del autor' })
  @IsString({ message: "nombre debe ser texto" })
  @IsNotEmpty({ message: "nombre no puede ser vacio" })
  readonly nombre: string;

  @ApiProperty({ description: 'Apellido del autor' })
  @IsString({ message: "apellido debe ser texto" })
  @IsNotEmpty({ message: "apellido no puede ser vacio" })
  readonly apellido: string;

  @ApiProperty({ description: 'DNI del autor', example: '30555888' })
  @IsString()
  @IsNotEmpty({ message: "dni no puede ser vacio" })
  @Matches(/^\d{8}$/, {
    message: 'Ingresa el DNI que son 8 digitos(solo numeros).',
  })
  readonly dni: string;

  @ApiProperty({ description: 'Nacionalidad del autor' })
  @IsString({ message: "nacionalidad debe ser texto" })
  @IsNotEmpty({ message: "nacionalidad no puede ser vacio" })
  readonly nacionalidad: string;

  @ApiProperty({ description: 'IDs de los libros asociados al autor', type: [Number] })
  @IsArray({ message: 'libros debe ser un array de números' })
  @IsOptional()
  @IsInt({ each: true, message: 'Cada ID de libro debe ser un número entero' })
  readonly libros: number[];
}
