import { Column, Model, Table, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Libro } from './libro.model';

@Table({ tableName: 'editoriales', timestamps: false, })
export class Editorial extends Model<Editorial> {
  
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
  direccion: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cuit: string;

  @HasMany(() => Libro)
  libros: Libro[];
}