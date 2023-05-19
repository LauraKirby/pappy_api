import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id?: string

  @Column()
  name?: string

  @Column()
  balance: number

  @Column()
  direction: string
}
