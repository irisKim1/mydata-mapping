/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { MysqlDataSource } from "../../database";
import { Mapping } from "../../entity/mapping";

export const addProduct = async (req: Request, res: Response) => {
  const info = {
    insu_type: req.body.insu_type,
    prod_name: req.body.prod_name,
  };

  const mappingRepo = MysqlDataSource.getRepository(Mapping);
  const product = mappingRepo.create(info);

  await mappingRepo
    .save(product)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

export const getInsuType = async (req: Request, res: Response) => {
  const insu_type = req.params.insu_type;
  const mappingRepo = MysqlDataSource.getRepository(Mapping);

  await mappingRepo
    .findOne({ where: { insu_type: insu_type } })
    .then((data) => {
      res.json(data);
      console.log("Get User: ", data);
    })
    .catch((err) => console.log(err));
};

export const getAllData = async (req: Request, res: Response) => {
  const mappingRepo = MysqlDataSource.getRepository(Mapping);

  await mappingRepo
    .findAndCount()
    .then((data) => {
      res.json(data);
      console.log("Get all Data: ", data);
    })
    .catch((err) => console.log(err));
};

// export const updateData = async (req: Request, res: Response) => {
//   const userRepo = AppDataSource.getRepository(User);

//   await userRepo
//     .createQueryBuilder()
//     .update(User)
//     .set(req.body)
//     .where({ firstName: req.params.firstName })
//     .execute()
//     .then((data) => {
//       res.json(data);
//       console.log("Update User: ", data);
//     })
//     .catch((err) => console.log(err));
// };
