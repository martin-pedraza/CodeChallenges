import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsInt, Min, IsNumber } from 'class-validator';

export class FindAllLibrosDto {
    @ApiPropertyOptional({ description: 'Categoría literaria para filtrar los libros', type: String })
    @IsString({ message: 'categoriaLiteraria debe ser un texto' })
    @IsOptional()
    readonly categoriaLiteraria?: string;

    @ApiPropertyOptional({ description: 'Número de página', example: 1 })
    @Type(() => Number)
    @IsNumber({}, { message: 'page debe ser un número' })
    @IsOptional()
    @Min(1, { message: 'page debe ser al menos 1' })
    readonly page?: number;

    @ApiPropertyOptional({ description: 'Número de libros por página', example: 10 })
    @Type(() => Number)
    @IsNumber({}, { message: 'limit debe ser un número' })
    @IsOptional()
    @Min(1, { message: 'limit debe ser al menos 1' })
    readonly limit?: number;
}
