import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Matches, IsArray, IsInt, IsDecimal, IsDate, IsNumber } from 'class-validator';

export class UpdateLibroDto {
    @ApiProperty({ description: 'Titulo del libro', required: false })
    @IsString({ message: "titulo debe ser texto" })
    @IsOptional()
    readonly titulo?: string;
  
    @ApiProperty({ description: 'Categoria literaria del libro', required: false })
    @IsString({ message: "categoriaLiteraria debe ser texto" })
    @IsOptional()
    readonly categoriaLiteraria?: string;
  
    @ApiProperty({ description: 'Precio del libro', required: false })
    @IsNumber({}, { message: "precio debe ser numero" })
    @IsOptional()
    readonly precio?: number;
  
    @ApiProperty({ description: 'Fecha de lanzamiento del libro', required: false })
    @IsDate({ message: "fechaLanzamiento debe ser texto" })
    @IsOptional()
    @Matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/, {
      message: 'fechaLanzamiento debe estar en formato DD/MM/YYYY o DD/MM/YY',
    })
    readonly fechaLanzamiento?: string;
  
    @ApiProperty({ description: 'Descripcion del libro', required: false })
    @IsString({ message: "descripcion debe ser texto" })
    @IsOptional()
    readonly descripcion?: string;
  
    @ApiProperty({ description: 'IDs de los autores asociados al libro', type: [Number], required: false })
    @IsArray({ message: 'autores debe ser un array de números' })
    @IsOptional()
    @IsInt({ each: true, message: 'Cada ID de autor debe ser un número entero' })
    readonly autores?: number[];
  
    @ApiProperty({ description: 'ID de la editorial asociada al libro', required: false })
    @IsInt({ message: 'editorialId debe ser un número entero' })
    @IsOptional()
    readonly editorialId?: number;
}
