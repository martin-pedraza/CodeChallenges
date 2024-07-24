import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Matches, IsArray, IsInt } from 'class-validator';

export class UpdateAutorDto {
    @ApiProperty({ description: 'Nombre del autor', required: false })
    @IsString({ message: "nombre debe ser texto" })
    @IsOptional()
    readonly nombre?: string;
  
    @ApiProperty({ description: 'Apellido del autor', required: false })
    @IsString({ message: "apellido debe ser texto" })
    @IsOptional()
    readonly apellido?: string;
  
    @ApiProperty({ description: 'DNI del autor', example: '30555888', required: false })
    @IsString()
    @IsOptional()
    @Matches(/^\d{8}$/, {
      message: 'Ingresa el DNI que son 8 digitos(solo numeros).',
    })
    readonly dni?: string;
  
    @ApiProperty({ description: 'Nacionalidad del autor', required: false })
    @IsString({ message: "nacionalidad debe ser texto" })
    @IsOptional()
    readonly nacionalidad?: string;

    @ApiProperty({ description: 'IDs de los libros asociados al autor', required: false, type: [Number] })
    @IsArray({ message: 'libros debe ser un array de números' })
    @IsOptional()
    @IsInt({ each: true, message: 'Cada ID de libro debe ser un número entero' })
    readonly libros?: number[];
}
