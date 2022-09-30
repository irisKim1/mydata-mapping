import chalk from "chalk";
import http from "http";
import { app, initialize } from "./app";

// const http = require("http")

(async () => {
  await initialize();
  const PORT = 6001;
  const httpServer = http.createServer(app);
  httpServer.listen({ port: PORT }, (): void => {
    console.log(
      chalk.cyanBright.bold(`✓ Started API server at http://0.0.0.0:${PORT}`)
    );
    if (process.send) {
      process.send("ready");
    }
  });
})();
