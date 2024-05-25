import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";
import { HandleErrors } from "../middlewares/handleErrors.middleware";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { isCarIdValid } from "../middlewares/isCarIdValid.middleware";

export const carsRouter = Router();

const carsControllers = new CarsControllers();

carsRouter.post("/", HandleErrors.execute, carsControllers.create);
carsRouter.get("/", HandleErrors.execute, carsControllers.getMany);
carsRouter.get("/:id", isCarIdValid.execute, HandleErrors.execute, carsControllers.getOne);
carsRouter.patch("/:id", isCarIdValid.execute, HandleErrors.execute, carsControllers.patch);
carsRouter.delete("/:id", isCarIdValid.execute, HandleErrors.execute, carsControllers.delete);
