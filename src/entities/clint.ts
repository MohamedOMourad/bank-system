import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";
import { Person } from "./person";

@Entity("User")
export class User extends Person {
  @Column()
  is_active: boolean;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_date: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_date: Date;
}
