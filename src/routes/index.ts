import { Router } from "express";
import v3 from "./v3";

const routes = Router();
routes.use("/v3", v3);

export default routes;
