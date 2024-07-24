import { Column, Model, Table, DataType, PrimaryKey, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Libro } from './libro.model';
import { LibroAutor } from './associations/libro-autor.model';

@Table({ tableName: 'autores', timestamps: false, })
export class Autor extends Model<Autor> {
  
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dni: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nacionalidad: string;

  @BelongsToMany(() => Libro, () => LibroAutor)
  libros: Libro[];
}