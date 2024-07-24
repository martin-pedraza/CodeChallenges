import { Column, Model, Table, DataType, ForeignKey, BelongsTo, BelongsToMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Editorial } from './editorial.model';
import { Autor } from './autor.model';
import { LibroAutor } from './associations/libro-autor.model';

@Table({ tableName: 'libros', timestamps: false, })
export class Libro extends Model<Libro> {
  
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
  titulo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categoriaLiteraria: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  precio: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  fechaLanzamiento: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  descripcion: string;

  @ForeignKey(() => Editorial)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  editorialId: number;

  @BelongsTo(() => Editorial)
  editorial: Editorial;

  @BelongsToMany(() => Autor, () => LibroAutor)
  autores: Autor[];
}