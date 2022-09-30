import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mapping {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "insu_type", length: 10 })
  insu_type: string;

  @Column("varchar", { name: "prod_name", length: 100 })
  prod_name: string;

  @Column("varchar", { name: "org_name", length: 100 })
  org_name: string;
}
