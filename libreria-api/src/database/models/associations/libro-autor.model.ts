import { Column, Model, DataType, Table, ForeignKey } from 'sequelize-typescript';
import { Libro } from '../libro.model';
import { Autor } from '../autor.model';

@Table({ tableName: 'libros_autores', timestamps: false, })
export class LibroAutor extends Model<LibroAutor> {

  @ForeignKey(() => Libro)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
  })
  libroId: number;

  @ForeignKey(() => Autor)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
  })
  autorId: number;
}