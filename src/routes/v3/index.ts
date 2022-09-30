import { Router } from "express";
import { addProduct, getAllData } from "../../services/v3";
const routes = Router();

routes.post("/addproduct", addProduct);
routes.get("/getalldata", getAllData);

export default routes;
