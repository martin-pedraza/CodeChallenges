import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches, IsArray, ArrayNotEmpty, IsInt, IsOptional, IsDecimal, IsDate, IsNumber } from 'class-validator';

export class CreateLibroDto {
  @ApiProperty({ description: 'Titulo del libro' })
  @IsString({ message: "titulo debe ser texto" })
  @IsNotEmpty({ message: "titulo no puede ser vacio" })
  readonly titulo: string;

  @ApiProperty({ description: 'Categoria literaria del libro' })
  @IsString({ message: "categoriaLiteraria debe ser texto" })
  @IsNotEmpty({ message: "categoriaLiteraria no puede ser vacio" })
  readonly categoriaLiteraria: string;

  @ApiProperty({ description: 'Precio del libro' })
  @IsNumber({}, { message: "precio debe ser numero" })
  @IsNotEmpty({ message: "precio no puede ser vacio" })
  readonly precio: number;

  @ApiProperty({ description: 'Fecha de lanzamiento del libro' })
  @IsString({ message: "fechaLanzamiento debe ser texto" })
  @IsNotEmpty({ message: "fechaLanzamiento no puede ser vacio" })
  @Matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/, {
    message: 'fechaLanzamiento debe estar en formato DD/MM/YYYY o DD/MM/YY',
  })
  readonly fechaLanzamiento: string;

  @ApiProperty({ description: 'Descripcion del libro' })
  @IsString({ message: "descripcion debe ser texto" })
  @IsNotEmpty({ message: "descripcion no puede ser vacio" })
  readonly descripcion: string;

  @ApiProperty({ description: 'IDs de los autores asociados al libro', type: [Number] })
  @IsArray({ message: 'autores debe ser un array de números' })
  @ArrayNotEmpty({ message: 'autores no puede ser un array vacio' })
  @IsInt({ each: true, message: 'Cada ID de autor debe ser un número entero' })
  readonly autores: number[];

  @ApiProperty({ description: 'ID de la editorial asociada al libro' })
  @IsInt({ message: 'editorialId debe ser un número entero' })
  @IsNotEmpty({ message: 'editorialId no puede ser vacio' })
  readonly editorialId: number;
}
