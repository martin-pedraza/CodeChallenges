import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Matches } from 'class-validator';

export class UpdateEditorialDto {
  @ApiProperty({ description: 'Nombre de la editorial', required: false })
  @IsString({ message: "nombre debe ser texto" })
  @IsOptional()
  readonly nombre?: string;

  @ApiProperty({ description: 'Dirección de la editorial', required: false })
  @IsString({ message: "direccion debe ser texto" })
  @IsOptional()
  readonly direccion?: string;

  @ApiProperty({ description: 'CUIT de la editorial', example: '20335559998', required: false })
  @IsString({ message: "direccion debe ser texto" })
  @IsOptional()
  @Matches(/^\d{11}$/, {
    message: 'Ingresa el CUIT que son 11 digitos(solo numeros).',
  })
  readonly cuit?: string;
}
