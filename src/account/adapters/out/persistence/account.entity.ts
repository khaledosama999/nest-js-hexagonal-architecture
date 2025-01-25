import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'account' })
export class AccountPersistenceEntity extends Model {
  @Column({ type: DataType.UUID, primaryKey: true })
  id: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  amount: number;
}
