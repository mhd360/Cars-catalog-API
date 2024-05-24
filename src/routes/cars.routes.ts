import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";

export const carsRouter = Router();

const carsControllers = new CarsControllers();

carsRouter.post("/", carsControllers.create);
carsRouter.get("/", carsControllers.getMany);
carsRouter.get("/:id", carsControllers.getOne);
carsRouter.patch("/:id", carsControllers.patch);
carsRouter.delete("/:id", carsControllers.delete);
