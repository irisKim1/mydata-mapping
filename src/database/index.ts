import { DataSource } from "typeorm";

export const MysqlDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "qwe123",
  database: "aijinet",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/../entity/**{.ts}"],
  migrations: [__dirname + "/../migration/**/*.ts"],
  subscribers: [],
});
