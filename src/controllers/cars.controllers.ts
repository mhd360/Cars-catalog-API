import { Request, Response } from "express";
import { CarsServices } from "../services/cars.services";
import { prisma } from "../database/prisma";

export class CarsControllers {
  async create(req: Request, res: Response) {
    const carsServices = new CarsServices();

    const response = await carsServices.create(req.body);

    return res.status(201).json(response);
  }

  async getMany(req: Request, res: Response) {
    const carsServices = new CarsServices();

    const response = await carsServices.getMany();

    return res.status(200).json(response);
  }

  async getOne(req: Request, res: Response) {
    const carsServices = new CarsServices();

    const response = await carsServices.getOne(req.params.id);

    return res.status(200).json(response);
  }

  async patch(req: Request, res: Response) {
    const carsServices = new CarsServices();

    const response = await carsServices.patch(req.params.id, req.body);

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    const carsServices = new CarsServices();

    await carsServices.delete(req.params.id);

    return res.status(204).json();
  }
}
