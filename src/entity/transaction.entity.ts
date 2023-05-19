import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id: string

  @Column()
  name?: string

  @Column("jsonb", { array: true })
  entries: object[]
}
