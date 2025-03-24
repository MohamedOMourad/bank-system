import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";
import { Person } from "./person";

@Entity("Banker")
export class Banker extends Person {
  @Column()
  salary: number;

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
