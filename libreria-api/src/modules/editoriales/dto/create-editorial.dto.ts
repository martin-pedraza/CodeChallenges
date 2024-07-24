import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateEditorialDto {
  @ApiProperty({ description: 'Nombre de la editorial' })
  @IsString({ message: "nombre debe ser texto" })
  @IsNotEmpty({ message: "nombre no puede ser vacio" })
  readonly nombre: string;

  @ApiProperty({ description: 'Dirección de la editorial' })
  @IsString({ message: "direccion debe ser texto" })
  @IsNotEmpty({ message: "direccion no puede ser vacio" })
  readonly direccion: string;

  @ApiProperty({ description: 'CUIT de la editorial', example: '12345678901' })
  @IsString()
  @IsNotEmpty({ message: "cuit no puede ser vacio" })
  @Matches(/^\d{11}$/, {
    message: 'Ingresa el CUIT que son 11 digitos(solo numeros).',
  })
  readonly cuit: string;
}
