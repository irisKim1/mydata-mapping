import chalk from "chalk";
import express from "express";
import { MysqlDataSource } from "./database";
import routes from "./routes";

export const app = express();
app.use(express.json());

export const initialize = async () => {
  await MysqlDataSource.initialize()
    .then(() => {
      console.log(chalk.blueBright.bold("MySql connection OK."));
    })
    .catch((error) =>
      console.log(chalk.redBright.bold("MySql connection error :", error))
    );
};

app.use(routes);
