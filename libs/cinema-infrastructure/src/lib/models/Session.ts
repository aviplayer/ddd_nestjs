import {Column, ForeignKey, Model, PrimaryKey, Table, Unique} from "sequelize-typescript";
import {Cinema} from "./Cinema";

@Table({tableName:'session'})
export class Session extends Model<Session> {

  @PrimaryKey
  @Unique
  @Column
  id: string;


  @ForeignKey(() => Cinema)
  @Column
  cinema_id: string;

  @Column
  time: Date;


}
