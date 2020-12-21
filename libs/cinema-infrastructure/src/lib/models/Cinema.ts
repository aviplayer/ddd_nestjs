import {Column, HasMany, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';
import {Session} from './Session'

@Table({tableName:'cinema'})
export class Cinema extends Model<Cinema> {

  @Unique
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  numberofseats: number;
  
}


